import { NotFoundException, UseGuards, UseInterceptors } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { DataInterceptor } from '../common/interceptors/data.interceptor';
import { ChatRoomsService } from './chat-rooms.service';
import { MessagesService } from './messages.service';
import { ChatRoom } from './models/chat-room';
import { Message } from './models/message';

const pubSub = new PubSub();

@UseInterceptors(DataInterceptor)
@Resolver((of) => ChatRoom)
export class ChatRoomsResolver {
  constructor(
    private readonly chatRoomsService: ChatRoomsService,
    private readonly messagesService: MessagesService,
  ) {}

  @Query((returns) => ChatRoom)
  async chatRoom(@Args('id') id: string): Promise<ChatRoom> {
    const chatRoom = await this.chatRoomsService.findOneById(id);
    if (!chatRoom) {
      throw new NotFoundException(id);
    }
    return chatRoom;
  }

  @ResolveField(() => [Message])
  async messages(@Parent() chatRoom: ChatRoom): Promise<Message[]> {
    const { id } = chatRoom;
    return this.messagesService.findAll({ chatRoomId: id });
  }

  @Mutation((returns) => ChatRoom)
  async createChatRoom(@Args('name') name: string): Promise<ChatRoom> {
    const chatRoom = await this.chatRoomsService.createChatRoom(name);
    pubSub.publish('chatRoomCreated', { chatRoom });
    return chatRoom;
  }

  @Mutation((returns) => Message)
  async sendMessage(
    @Args('chatRoomId') chatRoomId: string,
    @Args('sender') sender: string,
    @Args('content') content: string,
  ): Promise<Message> {
    const chatRoom = await this.chatRoomsService.findOneById(chatRoomId);
    if (!chatRoom) {
      throw new NotFoundException(chatRoomId);
    }
    const message = await this.messagesService.sendMessage(
      chatRoom.id,
      sender,
      content,
    );
    pubSub.publish('messageSent', { chatRoom, message });
    return message;
  }

  @Subscription((returns) => Message, {
    filter: (payload, { id }) => payload?.chatRoom?.id === id,
  })
  chatRoomMessages(@Args('id') id: string) {
    return pubSub.asyncIterator('messageSent');
  }
}

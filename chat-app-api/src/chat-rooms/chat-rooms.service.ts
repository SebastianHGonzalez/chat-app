import { Injectable } from '@nestjs/common';
import { ChatRoom } from './models/chat-room';

@Injectable()
export class ChatRoomsService {
  async createChatRoom(name: string): Promise<ChatRoom> {
    return {
      id: 3,
      name,
    } as any;
  }

  async findOneById(id: string): Promise<ChatRoom> {
    return {
      id,
      name: 'some chat room',
    } as any;
  }

  async findAll(): Promise<ChatRoom[]> {
    return [] as ChatRoom[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}

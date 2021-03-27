import { Injectable } from '@nestjs/common';
import { Message } from './models/message';

@Injectable()
export class MessagesService {
  async findOneById(id: string): Promise<Message> {
    return {} as any;
  }

  async findAll({ chatRoomId }: { chatRoomId: string }): Promise<Message[]> {
    return [
      {
        id: 'someId',
        chatRoomId,
        content: 'some content',
        sender: 'some sender',
      },
    ] as Message[];
  }

  async sendMessage(
    chatRoomId: string,
    sender: string,
    content: string,
  ): Promise<Message> {
    return { chatRoomId, content, sender } as Message;
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}

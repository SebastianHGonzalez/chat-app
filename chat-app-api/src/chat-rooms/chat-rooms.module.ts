import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { UnauthorizedFilter } from '../common/filters/unauthorized.filter';
import { ChatRoomsResolver } from './chat-rooms.resolver';
import { ChatRoomsService } from './chat-rooms.service';
import { MessagesService } from './messages.service';

@Module({
  providers: [
    ChatRoomsResolver,
    ChatRoomsService,
    MessagesService,
    {
      provide: APP_FILTER,
      useClass: UnauthorizedFilter,
    },
  ],
})
export class ChatRoomsModule {}

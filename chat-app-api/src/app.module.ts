import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ChatRoomsModule } from './chat-rooms/chat-rooms.module';

@Module({
  imports: [
    ChatRoomsModule,
    GraphQLModule.forRoot({
      debug: false,
      installSubscriptionHandlers: true,
      autoSchemaFile: join(
        process.cwd(),
        'integration/graphql-code-first/schema.gql',
      ),
    }),
  ],
})
export class ApplicationModule {}

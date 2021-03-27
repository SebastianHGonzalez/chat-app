import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Message {
  @Field((type) => ID)
  id: string;

  @Field()
  chatRoomId: string;

  @Field()
  sender: string;

  @Field()
  content: string;
}

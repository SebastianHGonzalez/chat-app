import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChatRoom {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;
}

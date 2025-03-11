import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateCommentInput {
  @Field(() => Int )
  postId: number;

  @Field()
  @IsString()
  content: string;
}

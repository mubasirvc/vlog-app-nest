"use server"

import { fetchGraphQL } from "../fetchGraphQl";
import { print } from "graphql";
import { CommentEntity } from "../types/modelTypes";
import { GET_POST_COMMENTS } from "../gqlQueries";


export async function getPostComments({
  postId,
  skip,
  take,
}: {
  postId: number;
  skip: number;
  take: number;
}) {
  const data = await fetchGraphQL(print(GET_POST_COMMENTS), {
    postId,
    take,
    skip,
  });

  return {
    comments: data.getPostComments as CommentEntity[],
    count: data.postCommentCount as number,
  };
}
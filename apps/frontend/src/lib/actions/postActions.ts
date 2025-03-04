"use server";

import { print } from "graphql";
import { GET_POST_BY_ID, GET_POSTS } from "../gqlQueries";
import { fetchGraphQL } from "../fetchGraphQl";
import { transformTakeSkip } from "../heplers";
import { Post } from "../types/modelTypes";

export const fetchPosts = async ({
  page,
  pageSize,
}: {
  page?: number;
  pageSize?: number;
}) => {
  const { take, skip } = transformTakeSkip({ page, pageSize });
  const data = await fetchGraphQL(print(GET_POSTS), { skip, take });
  return { posts: data.posts as Post[], totalPosts: data.postCount };
};

export const fetchPostById = async (id: number) => {
  const data = await fetchGraphQL(print(GET_POST_BY_ID), { id });

  return data.getPostById as Post;
};

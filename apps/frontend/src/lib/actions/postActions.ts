"use server";

import { print } from "graphql";
import { GET_POSTS } from "../gqlQueries";
import { fetchGraphQL } from "../fetchGraphQl";

export const fetchPosts = async () => {
  const data = await fetchGraphQL(print(GET_POSTS));
  console.log(data);
  return data.posts
};

import gql from "graphql-tag";

export const GET_POSTS = gql`
  query posts {
    posts {
      id
      title
      thumbnail
      content
      createdAt
      slug
    }
  }
`;

import { gql } from 'apollo-server';

export const userSchema = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    account: String!
  }

  input UserInput {
    name: String!
    email: String!
    account: String!
  }

  extend type Query {
    user(id: ID!): User!
  }

  extend type Mutation {
    createUser(input: UserInput!): User!
  }
`;

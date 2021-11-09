import { gql } from 'apollo-server';

export const rootSchema = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type AlreadyExists {
    message: String
  }

  type NotFound {
    element: String
  }

  """
  An ISO-8601 encoded UTC date string.
  """
  scalar DateTime

  """
  Information about pagination in a connection.
  """
  type PageInfo {
    endCursor: String
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
  }
`;

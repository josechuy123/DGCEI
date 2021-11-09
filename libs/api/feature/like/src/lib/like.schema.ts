
import {gql} from 'apollo-server'
export const likeSchema = gql`

type Like{
  id: ID!
  user: User
  course: Course
  createdAt: DateTime
  updatedAt: DateTime
}

extend type Query{
  like(id:ID!): Like!
  likes: [Like!]!
}
`;
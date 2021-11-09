
import {gql} from 'apollo-server'
export const dislikeSchema = gql`

type Dislike{
  id: ID!
  user: User
  course: Course
  createdAr: DateTime
  updatedAt: DateTime
}

extend type Query{
  dislike(id:ID!): Dislike!
  dislikes: [Dislike!]!
}
`;

import {gql} from 'apollo-server'
export const roleSchema = gql`

type Role{
  id: ID!
  name: String!
  createdAt: DateTime
  updatedAt: DateTime
}

extend type Query{
  role(name: String!): Role!
  roles: [Role!]!
}

extend type Mutation{
  createRole(input:CreateRoleInput): Role
}


input CreateRoleInput{
  name: String!
}
`;


 
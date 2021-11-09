import { gql } from 'apollo-server';

export const courseSchema = gql`
  enum CourseStatus {
    OPEN
    CLOSED
  }

  type Course {
    id: ID!
    name: String!
    description: String
    image: String
    #author: User!
    hours: Int
    status: CourseStatus
    users: [User]
    #categories: [Category]
    #dislike: Dislike
    #module: [Module]
    #comment: [Comment]
    #likes: [Like]
    #dislikes: [Dislike]
  }

  extend type Query {
    courses: [Course]
    course(id: ID!): Course
  }

  input CourseInput {
    name: String!
    description: String
    image: String
    #author: ID!
    hours: Int
    status: CourseStatus
    users: [ID]
    #categories: [Category]
    #dislike: Dislike
    #module: [Module]
    #comment: [Comment]
    #likes: [Like]
    #dislikes: [Dislike]
  }

  extend type Mutation {
    createCourse(input: CourseInput!): Course!
    deleteCourse(id: ID!): Course!
    #editCourse(input: ): Course!
  }
`;

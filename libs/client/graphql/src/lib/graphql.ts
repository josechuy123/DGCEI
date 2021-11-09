import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO-8601 encoded UTC date string. */
  DateTime: any;
};

export type AlreadyExists = {
  __typename?: 'AlreadyExists';
  message?: Maybe<Scalars['String']>;
};

export type Course = {
  __typename?: 'Course';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  hours?: Maybe<Scalars['Int']>;
  status?: Maybe<CourseStatus>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type CourseInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  hours?: Maybe<Scalars['Int']>;
  status?: Maybe<CourseStatus>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export enum CourseStatus {
  Open = 'OPEN',
  Closed = 'CLOSED'
}

export type CreateRoleInput = {
  name: Scalars['String'];
};


export type Dislike = {
  __typename?: 'Dislike';
  id: Scalars['ID'];
  user?: Maybe<User>;
  course?: Maybe<Course>;
  createdAr?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Like = {
  __typename?: 'Like';
  id: Scalars['ID'];
  user?: Maybe<User>;
  course?: Maybe<Course>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  createCourse: Course;
  createRole?: Maybe<Role>;
  createUser: User;
  deleteCourse: Course;
};


export type MutationCreateCourseArgs = {
  input: CourseInput;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationDeleteCourseArgs = {
  id: Scalars['ID'];
};

export type NotFound = {
  __typename?: 'NotFound';
  element?: Maybe<Scalars['String']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  course?: Maybe<Course>;
  courses?: Maybe<Array<Maybe<Course>>>;
  dislike: Dislike;
  dislikes: Array<Dislike>;
  like: Like;
  likes: Array<Like>;
  role: Role;
  roles: Array<Role>;
  user: User;
};


export type QueryCourseArgs = {
  id: Scalars['ID'];
};


export type QueryDislikeArgs = {
  id: Scalars['ID'];
};


export type QueryLikeArgs = {
  id: Scalars['ID'];
};


export type QueryRoleArgs = {
  name: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  account: Scalars['String'];
};

export type UserInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  account: Scalars['String'];
};

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string, email: string } };


export const GetUserDocument = gql`
    query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
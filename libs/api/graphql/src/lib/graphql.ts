export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  message?: Maybe<Scalars['String']>;
};

export type Course = {
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
  id: Scalars['ID'];
  user?: Maybe<User>;
  course?: Maybe<Course>;
  createdAr?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Like = {
  id: Scalars['ID'];
  user?: Maybe<User>;
  course?: Maybe<Course>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
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
  element?: Maybe<Scalars['String']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
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
  id: Scalars['ID'];
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type User = {
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

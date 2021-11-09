import { Context } from '@dgice-academy/api/data-access/datasource';
import {
  QueryUserArgs,
  MutationCreateUserArgs,
} from '@dgice-academy/api/graphql';

export const userResolvers = {
  Query: {
    async user(
      _parent: unknown,
      { id }: QueryUserArgs,
      { UserModel }: Context
    ) {
      return await UserModel.findOne({ _id: id });
    },
  },
  Mutation: {
    async createUser(
      _parent: unknown,
      { input }: MutationCreateUserArgs,
      { UserModel }: Context
    ) {
      return await UserModel.create(input);
    },
  },
};

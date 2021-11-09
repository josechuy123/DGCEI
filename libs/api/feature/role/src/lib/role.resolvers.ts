/*import { apiFeatureRole } from './api-feature-role';

describe('apiFeatureRole', () => {
  it('should work', () => {
    expect(apiFeatureRole()).toEqual('api-feature-role');
  });
});*/
import { Context } from '@dgice-academy/api/data-access/datasource';
import {
  QueryRoleArgs,
  MutationCreateRoleArgs,
} from '@dgice-academy/api/graphql';

export const roleResolvers = {
  Query: {
    async roles(_parent: unknown, _, { RoleModel }: Context) {
      return await RoleModel.find();
    },
    async role(
      _parent: unknown,
      { name }: QueryRoleArgs,
      { RoleModel }: Context
    ) {
      return await RoleModel.findOne({name});
    },
  },
  Mutation: {
    async createRole(
      _parent: unknown,
      { input }: MutationCreateRoleArgs,
      { RoleModel }: Context
    ) {
      return await RoleModel.create(input);
    },
  },
};

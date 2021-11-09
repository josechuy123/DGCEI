
import { Context } from '@dgice-academy/api/data-access/datasource';
import {
  QueryLikeArgs,
  /*MutationCreateCourseArgs,*/
} from '@dgice-academy/api/graphql';

export const likeResolvers = {
  Query: {
    async likes(_parent: unknown, _, { LikeModel }: Context) {
      return await LikeModel.find();
    },
    async like(
      _parent: unknown,
      { id }: QueryLikeArgs,
      { LikeModel }: Context
    ) {
      return await LikeModel.findOne({ _id: id });
    },
  },
  /*Mutation: {
    async createCourse(
      _parent: unknown,
      { input }: MutationCreateCourseArgs,
      { CourseModel }: Context
    ) {
      return await CourseModel.create(input);
    },
  },*/
};

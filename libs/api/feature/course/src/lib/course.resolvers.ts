import { Context } from '@dgice-academy/api/data-access/datasource';
import {
  QueryCourseArgs,
  MutationCreateCourseArgs,
} from '@dgice-academy/api/graphql';

export const courseResolvers = {
  Query: {
    async courses(_parent: unknown, _, { CourseModel }: Context) {
      return await CourseModel.find();
    },
    async course(
      _parent: unknown,
      { id }: QueryCourseArgs,
      { CourseModel }: Context
    ) {
      return await CourseModel.findOne({ _id: id });
    },
  },
  Mutation: {
    async createCourse(
      _parent: unknown,
      { input }: MutationCreateCourseArgs,
      { CourseModel }: Context
    ) {
      return await CourseModel.create(input);
    },
  },
};

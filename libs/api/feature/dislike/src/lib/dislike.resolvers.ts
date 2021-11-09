
import { Context } from '@dgice-academy/api/data-access/datasource';
import {
  QueryDislikeArgs,
  //MutationCreateCourseArgs,
} from '@dgice-academy/api/graphql';

export const dislikeResolvers = {
  Query: {
    async dislikes(_parent: unknown, _, { DislikeModel }: Context) {
      return await DislikeModel.find();
    },
    async dislike(
      _parent: unknown,
      { id }: QueryDislikeArgs,
      { DislikeModel }: Context
    ) {
      return await DislikeModel.findOne({ _id: id });
    },
  },
 /* Mutation: {
    async createCourse(
      _parent: unknown,
      { input }: MutationCreateCourseArgs,
      { CourseModel }: Context
    ) {
      return await CourseModel.create(input);
    },
  },*/
};
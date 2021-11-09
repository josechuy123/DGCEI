import { UserModel } from './lib/user.model';
import { CourseModel } from './lib/courses.model';
import { LikeModel } from './lib/like.model';
import { DislikeModel } from './lib/dislike.model';
import { RoleModel } from './lib/role.model';

export const context = {
  UserModel,
  CourseModel,
  LikeModel,
  DislikeModel,
  RoleModel,
};

export type Context = typeof context;

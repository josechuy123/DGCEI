import { model, Schema } from 'mongoose';
import { CourseModel } from './courses.model';
import { UserModel } from './user.model';

const { Types } = Schema;

export const DislikeSchema = new Schema({
  user: { type: Types.ObjectId, ref: UserModel },
  course: {type: Types.ObjectId, ref: CourseModel},
  createdAt: { type: Types.String, required: true },
  updatedAt: { type: Types.String, required: true },
});

export const DislikeModel = model('dislike', DislikeSchema);
import { model, Schema } from 'mongoose';
import { UserModel } from './user.model';

const { Types } = Schema;

export const CourseSchema = new Schema({
  name: { type: Types.String, required: true },
  description: { type: Types.String, required: true },
  image: { type: Types.String },
  //author: { type: Types.String },
  hours: { type: Types.String },
  status: { type: Types.String, enum: ['OPEN', 'CLOSED'] },
  users: [{ type: Types.ObjectId, ref: UserModel }],
});

export const CourseModel = model('course', CourseSchema);

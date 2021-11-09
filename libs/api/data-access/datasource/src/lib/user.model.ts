import { model, Schema } from 'mongoose';

const { Types } = Schema;

export const UserSchema = new Schema({
  name: { type: Types.String, required: true },
  email: { type: Types.String, required: true },
  account: { type: Types.String, required: true },
});

export const UserModel = model('user', UserSchema);

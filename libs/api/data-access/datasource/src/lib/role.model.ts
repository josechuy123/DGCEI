import { model, Schema } from 'mongoose';

const { Types } = Schema;

export const RoleSchema = new Schema({
  name: { type: Types.String, required: true },
  createdAt: { type: Types.String },
  updatedAt: { type: Types.String },
});

export const RoleModel = model('role', RoleSchema);
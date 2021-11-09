import { connect } from 'mongoose';

const connectionString = process.env.CONNECTION_STRING;

export const defaultConnection = connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

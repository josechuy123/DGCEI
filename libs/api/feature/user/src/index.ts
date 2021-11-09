import { userResolvers } from './lib/user.resolvers';
import { userSchema } from './lib/user.schema';

export default { typeDefs: userSchema, resolvers: userResolvers };

import { roleResolvers } from './lib/role.resolvers';
import { roleSchema } from './lib/role.schema';

export default { typeDefs: roleSchema, resolvers: roleResolvers };
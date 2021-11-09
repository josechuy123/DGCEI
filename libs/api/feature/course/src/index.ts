import { courseResolvers } from './lib/course.resolvers';
import { courseSchema } from './lib/course.schema';

export default { typeDefs: courseSchema, resolvers: courseResolvers };

import { ApolloServer, AuthenticationError } from 'apollo-server';
import getModules from './getModules';
import rootModule from '@dgice-academy/api/data-access/graphql';
import userModule from '@dgice-academy/api/feature/user';
import courseModule from '@dgice-academy/api/feature/course';
import dislikeModule from '@dgice-academy/api/feature/dislike';
import likeModule from '@dgice-academy/api/feature/like'
import roleModule from '@dgice-academy/api/feature/role'
import categoryModule from '@dgice-academy/api/feature/category';
import commentModule from '@dgice-academy/api/feature/comment';
import { context } from '@dgice-academy/api/data-access/datasource';
import './mongo-connection';

const { typeDefs, resolvers } = getModules([
  rootModule,
  userModule,
  courseModule,
  dislikeModule,
  likeModule,
  roleModule,
  categoryModule,
  commentModule,
]);

export default new ApolloServer({
  typeDefs,
  resolvers,
  formatError(error) {
    if (error.message.startsWith('Context creation failed: ')) {
      return new AuthenticationError(error.message.slice(25));
    }

    return error;
  },
  //dataSources,
  async context() {
    return {
      ...context,
    };
  },
});

/*const token =
      (req.headers.authorization &&
        req.headers.authorization.replace('Bearer ', '')) ||
      '';
    const platform = req.headers['x-platform'];
    const user = await getUserByToken(token, platform);

    return {
      //user,
      ...context,
      //...indexes,
      //platform: req.headers['x-platform'],
      */

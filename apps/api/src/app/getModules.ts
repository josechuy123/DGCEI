import { merge } from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function getModules(modules: any[]) {
  return modules.reduce(
    ({ typeDefs, resolvers }, module) => ({
      typeDefs: [...typeDefs, module.typeDefs || ''].flat(),
      resolvers: merge(resolvers, module.resolvers || {}),
    }),
    { typeDefs: [], resolvers: {} }
  );
}

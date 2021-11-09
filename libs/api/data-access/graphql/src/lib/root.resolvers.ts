import { GraphQLScalarType, Kind } from 'graphql';

const DateTimeScalar = new GraphQLScalarType({
  name: 'DateTime',
  description: 'Date time custom scalar type',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.toISOString();
  },
  parseLiteral(ast) {
    if (ast.kind !== Kind.INT) {
      return null;
    }

    return parseInt(ast.value, 10);
  },
});

export const rootResolvers = {
  DateTime: DateTimeScalar,
};

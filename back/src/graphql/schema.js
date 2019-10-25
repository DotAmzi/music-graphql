import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

function resolve(partial) {
  return path.resolve(process.cwd(), partial);
}

const typeDefs = mergeTypes(
  fileLoader(
    resolve(__dirname + '/resources/schemas'),
  ),
);

const resolvers = mergeResolvers(
  fileLoader(
    resolve(__dirname + '/resources/resolvers'),
  ),
);

export {
  typeDefs,
  resolvers,
};
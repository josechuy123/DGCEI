import server from './app/server';

const port = process.env.PORT || 4000;

server.listen({ port }).then(({ url }) => {
  console.log(`Listening at ${url}`);
});

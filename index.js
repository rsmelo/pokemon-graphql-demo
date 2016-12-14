const express = require('express');
const graphqlHttp = require('express-graphql');

const schema = require('./src/schema');

const PORT = process.env.PORT || 3000;
const server = express();

server.use('/graphql', graphqlHttp({
  schema,
  graphiql: true
}));

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
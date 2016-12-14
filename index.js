'user strict';

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    pokemon: String
  }

  type Schema {
    query: Query
  }
`);

const resolvers = {
  pokemon: () => 'pocket monsters'
}
const query = `
  query myFistQuery {
    pokemon
  }
`;

graphql(schema, query, resolvers)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
'user strict';

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    id: ID
    name: String,
    type: String,
    attack: Int,
    defense: Int,
  }

  type Schema {
    query: Query
  }
`);

const resolvers = {
  id: () => '1',
  name: () => 'Bulbasaur',
  type: () => 'grass',
  attack: () => 49,
  defense: () => 49
};

const query = `
  query myFistQuery {
    id
    name
    type
    attack
    defense
  }
`;

graphql(schema, query, resolvers)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
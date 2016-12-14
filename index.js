'user strict';
const express = require('express');
const graphqlHttp = require('express-graphql');
const { graphql, buildSchema } = require('graphql');

const PORT = process.env.PORT || 3000;
const server = express();

const schema = buildSchema(`
  type Pokemon {
    id: ID
    name: String,
    type: String,
    attack: Int,
    defense: Int,
  }

  type Query {
    pokemon: Pokemon,
    pokemons: [Pokemon]
  }

  type Schema {
    query: Query
  }
`);

const pokemons = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'grass',
    attack: 49,
    defense: 49
  },
  {
    id: 2,
    name: 'Ivysaur',
    type: 'grass',
    attack: 62,
    defense: 63
  }
];

const resolvers = {
  pokemon: () => ({
    id: 1,
    name: 'Bulbasaur',
    type: 'grass',
    attack: 49,
    defense: 49
  }),
  pokemons: () => pokemons
};

server.use('/graphql', graphqlHttp({
  schema,
  graphiql: true,
  rootValue: resolvers
}));

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
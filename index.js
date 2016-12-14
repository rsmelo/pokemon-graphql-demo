'user strict';
const express = require('express');
const graphqlHttp = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID
 } = require('graphql');

const PORT = process.env.PORT || 3000;
const server = express();

const pokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  description: 'A pocket monster',
  fields: {
    id: {
      type: GraphQLID,
      description: 'the pokemon number'
    },
    name: {
      type: GraphQLString,
      description: "the pokemon name"
    },
    type: {
      type: GraphQLString,
      description: "the pokemon type"
    },
    attack: {
      type: GraphQLInt,
      description: "the pokemon base attack value"
    },
    defense: {
      type: GraphQLInt,
      description: "the pokemon base defense value"
    }
  }
});

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type.',
  fields: {
    pokemon: {
      type: pokemonType,
      resolve: () => new Promise((resolve) =>  {
        resolve({
          id: 2,
          name: 'Ivysaur',
          type: 'grass',
          attack: 62,
          defense: 63
        });
      })
    }
  }
});

const schema = new GraphQLSchema({
  query: queryType
});

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
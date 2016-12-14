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

 const { getPokemonByNumber } = require('./src/resolvers/pokemon');

const PORT = process.env.PORT || 3000;
const server = express();

const pokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  description: 'A pocket monster',
  fields: {
    number: {
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
      args: {
        number: {
          type: GraphQLID,
          description: "the pokemon number"
        }
      },
      resolve: (_, args) => {
        return getPokemonByNumber(args.number);
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: queryType
});

server.use('/graphql', graphqlHttp({
  schema,
  graphiql: true
}));

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
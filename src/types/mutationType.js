const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString
 } = require('graphql');

const pokemonType = require('./pokemonType');
const { createPokemon } = require('../resolvers/pokemon');

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'the root Mutation type',
  fields: {
    createPokemon: {
      type: pokemonType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'the pokemon name'
        },
        type: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'the pokemon type'
        },
        attack: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'the pokemon base attack value'
        },
        defense: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'the pokemon base defense value'
        }
      },
      resolve: (_, args) => {
        return createPokemon(args);
      }
    }
  }
});

module.exports = mutationType;

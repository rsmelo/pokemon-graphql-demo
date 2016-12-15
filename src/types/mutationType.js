const {
  GraphQLObjectType,
  GraphQLNonNull,
 } = require('graphql');

const pokemonType = require('./pokemonType');
const pokemonInputType = require('./pokemonInputType');
const { createPokemon } = require('../resolvers/pokemon');

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'the root Mutation type',
  fields: {
    createPokemon: {
      type: pokemonType,
      args: {
        pokemon: {
          type: new GraphQLNonNull(pokemonInputType)
        }
      },
      resolve: (_, args) => {
        return createPokemon(args.pokemon);
      }
    }
  }
});

module.exports = mutationType;

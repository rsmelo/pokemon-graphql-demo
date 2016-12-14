const pokemonType = require('./pokemonType');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList
 } = require('graphql');


const { getPokemonByNumber, getPokemons } = require('../resolvers/pokemon');

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type.',
  fields: {
    pokemons: {
      type: new GraphQLList(pokemonType),
      resolve: getPokemons
    },
    pokemon: {
      type: pokemonType,
      args: {
        number: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'the pokemon number'
        }
      },
      resolve: (_, args) => {
        return getPokemonByNumber(args.number);
      }
    }
  }
});

module.exports = queryType;

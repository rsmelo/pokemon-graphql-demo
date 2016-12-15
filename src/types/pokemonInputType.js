const {
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLInputObjectType,
} = require('graphql');

const pokemonInputType = new GraphQLInputObjectType({
  name: 'PokemonInput',
  description: 'A pocket monster',
  fields: {
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
  }
});

module.exports = pokemonInputType;

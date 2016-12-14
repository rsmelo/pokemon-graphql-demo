const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID
 } = require('graphql');

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
      description: 'the pokemon name'
    },
    type: {
      type: GraphQLString,
      description: 'the pokemon type'
    },
    attack: {
      type: GraphQLInt,
      description: 'the pokemon base attack value'
    },
    defense: {
      type: GraphQLInt,
      description: 'the pokemon base defense value'
    }
  }
});

module.exports = pokemonType;

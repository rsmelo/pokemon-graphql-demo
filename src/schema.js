const { GraphQLSchema } = require('graphql');

const queryType = require('./types/queryType');
const mutationType = require('./types/mutationType');

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});

module.exports = schema;

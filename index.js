'user strict';

const { graphql, buildSchema } = require('graphql');

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

const query = `
  query myFistQuery {
    pokemons {
      id
      name
      type
      attack
      defense
    }
  }
`;

graphql(schema, query, resolvers)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
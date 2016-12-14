const pokemons = require('../data/pokemon.json');

const getPokemonByNumber = (number) => new Promise((resolve) => {
  const filteredPokemons = pokemons.find((item) => item.number === number);
  resolve(filteredPokemons);
});

const getPokemons = () => new Promise((resolve) => resolve(pokemons));

exports.getPokemonByNumber = getPokemonByNumber;
exports.getPokemons = getPokemons;

const pokemons = require('../data/pokemon.json');

const getPokemonByNumber = (number) => new Promise((resolve) => {
  const pokemonReturn = Object.assign({}, pokemons[number], { number });
  resolve(pokemonReturn);
});

exports.getPokemonByNumber = getPokemonByNumber;

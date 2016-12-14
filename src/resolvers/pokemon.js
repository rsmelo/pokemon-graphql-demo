const pokemons = require('../data/pokemon.json');

const getPokemonByNumber = (number) => new Promise((resolve) => {
  const filteredPokemons = pokemons.find((item) => item.number === number);
  resolve(filteredPokemons);
});

const getPokemons = () => new Promise((resolve) => resolve(pokemons));

const createPokemon = ({ name, attack, defense, type}) => {
  const number = parseInt(pokemons[pokemons.length -1].number, 10) + 1;
  const newPokemon = {
    number,
    name,
    attack,
    defense,
    type
  };

  pokemons.push(newPokemon);

  return newPokemon;
};

module.exports.getPokemonByNumber = getPokemonByNumber;
module.exports.getPokemons = getPokemons;
module.exports.createPokemon = createPokemon;
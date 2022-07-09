const seedUsers = require('./users');
const seedPokemon = require('./pokemon');
const seedGames = require('./games');
const seedPokedexes = require('./pokedexes');
const seedUserPokemon = require('./userPokemon');

const seedAll = async() => {
  await seedUsers();
  await seedPokemon();
  await seedGames();
  await seedPokedexes();
  await seedUserPokemon();
}

seedAll();
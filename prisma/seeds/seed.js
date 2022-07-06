const seedUsers = require('./users');
const seedPokemon = require('./pokemon');

const seedAll = async() => {
  await seedUsers();
  await seedPokemon();
}

seedAll();
const seedUsers = require('./users');

const seedAll = async() => {
  await seedUsers();
}

seedAll();
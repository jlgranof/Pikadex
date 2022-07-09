const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const seedUserPokemon = async () => {
  const pokemon = await prisma.userPokemon.createMany({
    data: [
      {
        level: 5,
        hp: 50,
        attack: 59,
        defense: 54,
        specialAttack: 41,
        specialDefense: 40,
        speed: 90,
        pokemonId: 1,
        pokedexId: 1
      },
      {
        level: 9,
        hp: 70,
        attack: 60,
        defense: 94,
        specialAttack: 54,
        specialDefense: 49,
        speed: 60,
        pokemonId: 4,
        pokedexId: 1
      },
      {
        level: 6,
        hp: 40,
        attack: 70,
        defense: 44,
        specialAttack: 42,
        specialDefense: 48,
        speed: 50,
        pokemonId: 7,
        pokedexId: 2
      },
      {
        level: 11,
        hp: 80,
        attack: 74,
        defense: 68,
        specialAttack: 60,
        specialDefense: 70,
        speed: 63,
        pokemonId: 10,
        pokedexId: 2
      }
    ]
  });

  await prisma.$disconnect();
}

module.exports = seedUserPokemon;
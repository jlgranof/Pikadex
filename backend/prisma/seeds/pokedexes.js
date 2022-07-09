const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const seedPokedexes = async () => {
  const pokedexes = await prisma.pokedex.createMany({
    data: [
      {
        name: 'Ash\'s Red Pokedex',
        description: 'This is the Pokedex for Ash\'s copy of Pokemon Red.',
        userId: 1, 
        gameId: 1
      },
      {
        name: 'Brock\'s Blue Pokedex',
        description: 'This is the Pokedex for Brock\'s copy of Pokemon Blue.',
        userId: 2,
        gameId: 2
      }
    ]
  });

  await prisma.$disconnect();
}

module.exports = seedPokedexes;
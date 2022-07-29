const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const seedGames = async () => {
  const games = await prisma.game.createMany({
    data: [
      {
        name: 'Red',
        generationNumber: 1
      },
      {
        name: 'Blue',
        generationNumber: 1
      },
      {
        name: 'Yellow',
        generationNumber: 1
      },
      {
        name: 'Gold',
        generationNumber: 2
      },
      {
        name: 'Silver',
        generationNumber: 2
      },
      {
        name: 'Crystal',
        generationNumber: 2
      },
      {
        name: 'Ruby',
        generationNumber: 3
      },
      {
        name: 'Sapphire',
        generationNumber: 3
      },
      {
        name: 'Emerald',
        generationNumber: 3
      },
      {
        name: 'FireRed',
        generationNumber: 3
      },
      {
        name: 'LeafGreen',
        generationNumber: 3
      },
      {
        name: 'Diamond',
        generationNumber: 4
      },
      {
        name: 'Pearl',
        generationNumber: 4
      },
      {
        name: 'Platinum',
        generationNumber: 4
      },
      {
        name: 'HeartGold',
        generationNumber: 4 
      },
      {
        name: 'SoulSilver',
        generationNumber: 4
      },
      {
        name: 'Black',
        generationNumber: 5 
      },
      {
        name: 'White',
        generationNumber: 5 
      },
      {
        name: 'Black 2',
        generationNumber: 5 
      },
      {
        name: 'White 2',
        generationNumber: 5 
      },
      {
        name: 'X',
        generationNumber: 6 
      },
      {
        name: 'Y',
        generationNumber: 6 
      },
      {
        name: 'Omega Ruby',
        generationNumber: 6 
      },
      {
        name: 'Alpha Sapphire',
        generationNumber: 6
      },
      {
        name: 'Sun',
        generationNumber: 7
      },
      {
        name: 'Moon',
        generationNumber: 7 
      },
      {
        name: 'Ultra Sun',
        generationNumber: 7 
      },
      {
        name: 'Ultra Moon',
        generationNumber: 7
      },
      {
        name: 'Sword',
        generationNumber: 8 
      },
      {
        name: 'Shield',
        generationNumber: 8 
      },
      {
        name: 'Brilliant Diamond',
        generationNumber: 8
      },
      {
        name: 'Shining Pearl',
        generationNumber: 8 
      },
      {
        name: 'Legends: Arceus',
        generationNumber: 8 
      },
      {
        name: 'Scarlet',
        generationNumber: 9 
      },
      {
        name: 'Violet',
        generationNumber: 9 
      },
    ]
  });
  
  await prisma.$disconnect();
}

module.exports = seedGames;
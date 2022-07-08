const { PrismaClient } = require("@prisma/client");
const { getPokemon } = require('./pokeApi');

const prisma = new PrismaClient();

const seedPokemon = async () => {
  for (let i = 1; i <= 898; i++) { 
    const { pokemon: {
      name, nationalPokedexNumber, description, height, weight, abilities, isLegendary, isMythical, hp, attack, defense, specialAttack, specialDefense, speed, pictureUrl 
    }, types } = await getPokemon(i);
    
    
    const newPokemon = await prisma.pokemon.create({
      data: {
        nationalPokedexNumber,
        name,
        description,
        height,
        weight,
        abilities,
        isLegendary,
        isMythical, 
        hp,
        attack, 
        defense,
        specialAttack,
        specialDefense,
        speed,
        pictureUrl
      }
    });

    console.log(newPokemon);

    for (let j = 0; j < types.length; j++) {
      const upsertType = await prisma.type.upsert({
        where: {
          name: types[j]
        }, 
        update: {}, 
        create: {
          name: types[j]
        }
      });
      
      const pokemon = await prisma.pokemon.update({
        where: { nationalPokedexNumber: i },
        data: {
          types: {
            create: {
              type: {
                connect: { id: upsertType.id }
              }
            }
          }
        }
      })
    }
  }

  await prisma.$disconnect();
}

module.exports = seedPokemon;
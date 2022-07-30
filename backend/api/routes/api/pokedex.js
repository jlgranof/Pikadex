const express = require('express');
const asyncHandler = require('express-async-handler');
const { PrismaClient } = require('@prisma/client');

const { requireAuth } = require('../../utils/auth');
const { toRegularUser } = require('../../utils/user');

const router = express.Router();
const prisma = new PrismaClient();

// GET ALL POKEDEXES
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const pokedexes = await prisma.pokedex.findMany({
      include: {
        user: {
          select: {
            id: true,
            username: true, 
            email: true,
            avatarUrl: true,
            joined: true
          }
        },
        game: true,
        pokemons: {
          include: {
            pokemon: {
              include: {
                types: {
                  select: {
                    type: {
                      select: {
                        name: true
                      }
                    }
                  }
                }
              }
            }
        }
      }
    }
    });
    return res.json({ pokedexes });
  })
);

// GET ALL POKEDEXES FOR A GAME
router.get(
  '/game/:id',
  asyncHandler(async (req, res) => {
    const pokedexes = await prisma.pokedex.findMany({
      where: {
        gameId: Number(req.params.id)
      },
      include: {
        user: {
          select: {
            id: true,
            username: true, 
            email: true,
            avatarUrl: true,
            joined: true
          }
        },
        game: true,
        pokemons: {
          include: {
            pokemon: true
        }
      }
    }
    });
    return res.json({ pokedexes });
  })
);

// GET ALL POKEDEXES FOR A USER
router.get(
  '/user/:id',
  asyncHandler(async (req, res) => {
    const pokedexes = await prisma.pokedex.findMany({
      where: {
        userId: Number(req.params.id)
      },
      include: {
        user: {
          select: {
            id: true,
            username: true, 
            email: true,
            avatarUrl: true,
            joined: true
          }
        },
        game: true,
        pokemons: {
          include: {
            pokemon: true
        }
      }
    }
    });
    return res.json({ pokedexes });
  })
);

// CREATE NEW POKEDEX
router.post(
  '/',
  requireAuth,
  asyncHandler(async(req, res, next) => {
    const { name, description, userId, gameId } = req.body;
    const pokedex = await prisma.pokedex.create({
      data: {
        name,
        description,
        userId,
        gameId
      }
    });
    return res.json({ pokedex });
  })
);

// EDIT POKEDEX
router.put(
  '/:id',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { name, description, gameId } = req.body;
    const pokedex = await prisma.pokedex.update({
      where: {
        id: Number(req.params.id)
      }, 
      data: {
        name: name,
        description: description,
        gameId: gameId
      }
    });
    return res.json({ pokedex });
  })
)

// DELETE POKEDEX
router.delete(
  '/:id',
  requireAuth,
  asyncHandler(async(req, res) => {
    const pokedex = await prisma.pokedex.delete({
      where: {
        id: Number(req.params.id)
      }
    });
    return res.json({ pokedex });
  })
)

// ADD NEW POKEMON
router.post(
  '/pokemon',
  requireAuth,
  asyncHandler(async(req, res) => {
    const { level, hp, attack, defense, specialAttack, specialDefense, speed, pokemonId, pokedexId } = req.body;
    const pokemon = await prisma.userPokemon.create({
      data: {
        level: level,
        hp: hp,
        attack: attack,
        defense: defense,
        specialAttack: specialAttack,
        specialDefense: specialDefense,
        speed: speed,
        pokedex: {
          connect: { id: pokedexId }
        },
        pokemon: {
          connect: { id: pokemonId}
        }, 
      }, 
    });
    return res.json({ pokemon });
  })
)

// EDIT A POKEMON
router.put(
  '/pokemon/:id',
  requireAuth,
  asyncHandler(async(req, res) => {
    const { level, hp, attack, defense, specialAttack, specialDefense, speed, stillOwn, evolved } = req.body;
    const pokemon = await prisma.userPokemon.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        level: level,
        hp: hp,
        attack: attack,
        defense: defense,
        specialAttack: specialAttack,
        specialDefense: specialDefense,
        speed: speed,
        stillOwn: stillOwn,
        evolved: evolved
      }
    });

    return res.json({ pokemon });
  })
);

router.delete(
  '/pokemon/:id',
  requireAuth,
  asyncHandler(async(req, res) => {
    const pokemon = await prisma.userPokemon.delete({
      where: { id: Number(req.params.id) }
    });
    return res.json({ pokemon });
  })
)


module.exports = router;
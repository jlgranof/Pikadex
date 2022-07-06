const express = require('express');
const asyncHandler = require('express-async-handler');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const pokemon = await prisma.pokemon.findMany({
      include: {
        types: {
          select: {
            type: {
              select: {
                name: true
              }
            },
            pokemon: false,
          },
        }
      }
    });

    return res.json({ pokemon });
  })
);

module.exports = router;
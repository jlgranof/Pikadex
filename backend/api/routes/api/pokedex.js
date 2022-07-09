const express = require('express');
const asyncHandler = require('express-async-handler');
const { PrismaClient } = require('@prisma/client');

const { requireAuth } = require('../../utils/auth');

const router = express.Router();
const prisma = new PrismaClient();

// GET ALL POKEDEXES
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const pokedexes = await prisma.pokedex.findMany();
    return res.json({ pokedexes });
  })
);

module.exports = router;
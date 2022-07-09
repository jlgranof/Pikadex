const express = require('express');
const router = express.Router();

const pokemonRouter = require('./pokemon');
const pokedexRouter = require('./pokedex');

router.use('/pokemon', pokemonRouter);
router.use('/pokedex', pokedexRouter);

module.exports = router;
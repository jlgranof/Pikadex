const fetch = require('node-fetch');

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'
const speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/'

const getPokemon = async(id) => {
  const pokeRes = await fetch(`${pokeUrl}${id}`);
  const pokeInfo = await pokeRes.json();
  
  const speciesRes = await fetch(`${speciesUrl}${id}`);
  const speciesInfo = await speciesRes.json();

  const pokemon = {};

  pokemon.abilities = pokeInfo.abilities.map(ability => ability.ability.name).join(', ');
  pokemon.attack = pokeInfo.stats[1].base_stat;
  pokemon.defense = pokeInfo.stats[2].base_stat;
  // pokemon.description = speciesInfo.flavor_text_entries; // THIS ONE NEEDS A HELPER FUCTION
  

  console.log(pokemon);
}

getPokemon(1)
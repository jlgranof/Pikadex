const fetch = require('node-fetch');

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'
const speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/'

// ADD IN A HELPER TO CAPITALIZE EVERY FIRST LETTER

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
  // pokemon.height = pokeInfo.height; // NEEDS HELPER TO CHANGE TO MY FORMAT
  pokemon.hp = pokeInfo.stats[0].base_stat;
  pokemon.isLegendary = speciesInfo.is_legendary;
  pokemon.isMythical = speciesInfo.is_mythical;
  pokemon.name = pokeInfo.name.split("-")[0];
  pokemon.pictureUrl = pokeInfo.sprites.other['official-artwork'].front_default;
  pokemon.specialAttack = pokeInfo.stats[3].base_stat;
  pokemon.specialDefense = pokeInfo.stats[4].base_stat;
  pokemon.speed = pokeInfo.stats[5].base_stat;
  pokemon.weight = pokeInfo.weight; // NEEDS HELPER TO CHANGE TO MY FORMAT

  const types = pokeInfo.types.map(type => type.type.name)

  console.log(pokemon, types);
}

getPokemon(1)
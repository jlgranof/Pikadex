const fetch = require('node-fetch');

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'
const speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/'


const getPokemon = async(id) => {
  const pokeRes = await fetch(`${pokeUrl}${id}`);
  const pokeInfo = await pokeRes.json();
  
  const speciesRes = await fetch(`${speciesUrl}${id}`);
  const speciesInfo = await speciesRes.json();

  const pokemon = {};

  pokemon.nationalPokedexNumber = id;
  pokemon.abilities = pokeInfo.abilities.map(ability => title(ability.ability.name)).join(', '); 
  pokemon.attack = pokeInfo.stats[1].base_stat;
  pokemon.defense = pokeInfo.stats[2].base_stat;
  pokemon.description = speciesInfo.flavor_text_entries.filter(entry => entry.language.name === "en")[0].flavor_text.split('\n').join(' ').split('\f').join(' '); // I know this is really messy
  pokemon.height = `${(pokeInfo.height / 3.048).toFixed(2)} ft`;
  pokemon.hp = pokeInfo.stats[0].base_stat;
  pokemon.isLegendary = speciesInfo.is_legendary;
  pokemon.isMythical = speciesInfo.is_mythical;
  pokemon.name = title(pokeInfo.name.split("-")[0]); 
  pokemon.pictureUrl = pokeInfo.sprites.other['official-artwork'].front_default;
  pokemon.specialAttack = pokeInfo.stats[3].base_stat;
  pokemon.specialDefense = pokeInfo.stats[4].base_stat;
  pokemon.speed = pokeInfo.stats[5].base_stat;
  pokemon.weight = `${(pokeInfo.weight / 4.536).toFixed(2)} lbs`;

  const types = pokeInfo.types.map(type => title(type.type.name))

  if (id === 29) pokemon.name += '-F';
  else if (id === 32) pokemon.name += '-M';
  else if (id === 122) pokemon.name += '. Mime';
  else if (id === 439) pokemon.name += ' Jr.';
  else if (id === 474) pokemon.name += '-Z';
  else if (id === 785) pokemon.name += ' Koko';
  else if (id === 786) pokemon.name += ' Lele';
  else if (id === 787) pokemon.name += ' Bulu';
  else if (id === 788) pokemon.name += ' Fini';
  else if (id === 866) pokemon.name += '. Rime';
  
  return { pokemon, types };
}

const title = str => `${str[0].toUpperCase()}${str.slice(1)}`;

module.exports = { getPokemon };
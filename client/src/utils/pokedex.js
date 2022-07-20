export const profilePokedexInfo = (pokedexes) => {
  const info = { 
    count: pokedexes.length,
    numOfPokemon: 0
   };

  pokedexes.forEach(pokedex => {
    info.numOfPokemon += pokedex.pokemons.length;
  });

  return info;
};


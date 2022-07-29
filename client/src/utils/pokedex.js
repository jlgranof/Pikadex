export const profilePokedexInfo = (pokedexes) => {
  const info = { 
    count: pokedexes.length,
    numOfPokemon: 0
   };
   console.log(pokedexes)
  pokedexes.forEach(pokedex => {
    info.numOfPokemon += pokedex.pokemons.length;
  });

  return info;
};


export const normalizePokemon = (pokemons) => {
  console.log(pokemons.map(pokemon => {
    pokemon.abilities = pokemon.pokemon.abilities;
    pokemon.description = pokemon.pokemon.description;
    pokemon.height = pokemon.pokemon.height;
    pokemon.isLegendary = pokemon.pokemon.isLegendary;
    pokemon.isMythical = pokemon.pokemon.isMythical;
    pokemon.name = pokemon.pokemon.name;
    pokemon.nationalPokedexNumber = pokemon.pokemon.nationalPokedexNumber;
    pokemon.pictureUrl = pokemon.pokemon.pictureUrl;
    pokemon.weight = pokemon.pokemon.weight;
    return pokemon;
  }));
}
const PokedexListCard = ({ pokedex }) => {
  const numbers = {
    pokemon: 0,
    stats: 0
  }
  
  pokedex.pokemons.reduce((accum, pokemon) => {
    numbers.pokemon++;
    numbers.stats = numbers.stats + pokemon.hp + pokemon.attack + pokemon.defense + pokemon.specialAttack + pokemon.specialDefense + pokemon.speed;
    return numbers;
  }, numbers);

  const pokedexCopy = [...pokedex.pokemons];
  pokedexCopy.sort((a, b) => b.level - a.level);

  return (
    <div className="border-black border-4 m-8 flex flex-row">
      <div className="text-center border-right-white border-r-2 w-3/12">
        <p className="text-white text-lg">{pokedex.name}</p>
        <p className="text-slate-300">{pokedex.description}</p>
      </div>
      <div className="ml-8">
        <p className="text-white">Game: {pokedex.game.name} (Gen: {pokedex.game.generationNumber})</p>
        <p className="text-white">Number of Pokemon: {numbers.pokemon}</p>
        <p className="text-white">Total Stats: {numbers.stats}</p>
      </div>
      <div className="text-white m-4">
        The rest of this will contain pokemon pictures and levels (up to 5?)
      </div>
    </div>
  )
}

export default PokedexListCard;
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonListContainer = ({ pokemons }) => {
  const pokeList = Array.isArray(pokemons) && pokemons.length
    ? pokemons.map(pokemon => (
      <div className="h-96">
        <PokemonCard 
         key={pokemon.id}
          pokemon={pokemon}
        />
      </div>
    )
    )
    : <div className="text-white">Loading...</div>

  return (
    <div className="text-white text-2xl">
      <div>This will be the Search Bar</div>
      <div>This will be the Advanced Search Container</div>
      <div>This will be the Sort Container</div>
      <div 
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10"
      >
        {pokeList}
      </div>
    </div>
  );
};

export default PokemonListContainer;
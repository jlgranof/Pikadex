import { useState, useEffect } from "react";

import PokemonNavigation from "../PokemonNavigation";
import PokemonInfo from "./PokemonInfo";

const Pokemon = ({
  pokemonList,
  id,
  isUserPokedex
}) => {
  const [pokemon, setPokemon] = useState(null);
  const [prevPokemon, setPrevPokemon] = useState(null);
  const [nextPokemon, setNextPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      if (pokemonList) {
        let index;

        setPokemon(pokemonList.filter((pokemon, idx) => {
          if (pokemon.id === id) {
            index = idx;
            return true;
          }
          return false;
        })[0]);

        setPrevPokemon(pokemonList[index - 1]);
        setNextPokemon(pokemonList[index + 1]);

        if (isUserPokedex) {
          // Create a helper function to normalize the pokemon since some info will be nested
        }
      }
    })();
  }, [pokemonList, id, isUserPokedex]);

  if (!pokemon) return <div>Loading...</div>

  return (
    <div className="h-full">
      <div className="flex flex-row m-10 w-full justify-around">
        <PokemonNavigation 
          id={prevPokemon.id}
          nationalPokedexNumber={prevPokemon.nationalPokedexNumber}
          direction='previous'
          pictureUrl={prevPokemon.pictureUrl}
          name={prevPokemon.name}
          isLegendary={prevPokemon.isLegendary}
          isMythical={prevPokemon.isMythical}
          isUserPokedex={isUserPokedex}
        />

        <PokemonNavigation
          id={nextPokemon.id}
          nationalPokedexNumber={nextPokemon.nationalPokedexNumber}
          direction='next'
          pictureUrl={nextPokemon.pictureUrl}
          name={nextPokemon.name}
          isLegendary={nextPokemon.isLegendary}
          isMythical={nextPokemon.isMythical}
          isUserPokedex={isUserPokedex}
        />
      </div>

      <PokemonInfo 
        pokemon={pokemon}
      />
    </div>
  );
};

export default Pokemon;
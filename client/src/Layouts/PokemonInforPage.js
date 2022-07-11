import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import PokemonImage from "../components/PokemonImage/index.js";
import PokemonNavigation from "../components/PokemonNavigation/index.js";

  // NEED TO FIX THE PREVIOUS AND NEXT DIVS TO COMPLETELY GO INSIDE POKEMON NAVIGATION
  // REFACTOR THIS COMPONENT TO BE PASSED IN A POKEMON LIST SO IT WORKS WITH POKEDEXES

const PokemonInfoPage = () => {
  const fullPokemonList = useSelector(state => state.pokemon.pokemon);
  const [currentPokemon, setCurrentPokemon] = useState(0);
  const [prevPokemon, setPrevPokemon] = useState(null);
  const [nextPokemon, setNextPokemon] = useState(null);
  let { id } = useParams();
  id = Number(id);

  useEffect(() => {
    (async() => {
      if (fullPokemonList) {
        setCurrentPokemon(fullPokemonList.filter(p => p.id === Number(id))[0]);
        if (id > 1) setPrevPokemon(fullPokemonList.filter(p => p.id === (id - 1))[0]);
        if (id < 898) setNextPokemon(fullPokemonList.filter(p => p.id === (id + 1))[0]); 
      }
    })();
  }, [fullPokemonList, id]);

  if (!currentPokemon) return 'Loading...'

  // NEED TO FIX THE PREVIOUS AND NEXT DIVS TO COMPLETELY GO INSIDE POKEMON NAVIGATION
  // REFACTOR THIS COMPONENT TO BE PASSED IN A POKEMON LIST SO IT WORKS WITH POKEDEXES

  return (
    <div className="h-screen">
      <div className="flex flex-row justify-between align-middle">
        <div className="flex previous h-1/3 w-64 bg-black ml-2 mt-44">
          {prevPokemon && 
            <div className="flex flex-col justify-end text-right">
              <p className="text-white text-2xl m-4 -mr-2">{String(id - 1).padStart(3, 0)}</p>
                <PokemonNavigation 
                  id={id-1}
                  direction='previous'
                  pictureUrl={prevPokemon.pictureUrl}
                  name={prevPokemon.name}
                  isLegendary={prevPokemon.isLegendary}
                  isMythical={prevPokemon.isMythical}
                />
              <p className="text-white text-3xl m-4 -mr-2">{prevPokemon.name}</p>
            </div>}
        </div>

        <div className="flex mt-8 justify-center flex-col w-1/5">
          <div className="flex flex-col text-center m-8">
            <p className="text-white text-4xl">{String(id).padStart(3, 0)}</p>
            <p className="text-white text-6xl">{currentPokemon.name}</p>
          </div>
          <PokemonImage 
            pokemonUrl={currentPokemon.pictureUrl}
            name={currentPokemon.name}
            isLegendary={currentPokemon.isLegendary}
            isMythical={currentPokemon.isMythical}
            type={0}
          />
          <p className="text-white text-lg mt-10">{currentPokemon.description}</p>
        </div>

        <div className="next h-1/3 w-64 bg-black flex content-between mr-2 mt-44">
            {nextPokemon && 
            <div className="flex flex-col text-left justify-center">
              <p className="text-white text-2xl m-4">{String(id + 1).padStart(3, 0)}</p>
              <PokemonNavigation 
                id={id+1}
                direction='next'
                pictureUrl={nextPokemon.pictureUrl}
                name={nextPokemon.name}
                isLegendary={nextPokemon.isLegendary}
                isMythical={nextPokemon.isMythical}
              />
              <p className="text-white text-3xl m-4">{nextPokemon.name}</p>      
            </div>}
          </div>

      </div>
    </div>
  );
};

export default PokemonInfoPage;
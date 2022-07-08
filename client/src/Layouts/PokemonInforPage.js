import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import PokemonImage from "../components/PokemonImage.js";
import PokemonNavigation from "../components/PokemonNavigation/index.js";

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

  return (
    <div className="flex flex-row justify-center">
      <div className="previous h-96 w-80 bg-black">
        {prevPokemon && 
          <div className="flex flex-row space-between">
            <PokemonNavigation 
            id={id-1}
            direction='previous'
            pictureUrl={prevPokemon.pictureUrl}
            name={prevPokemon.name}
            isLegendary={prevPokemon.isLegendary}
            isMythical={prevPokemon.isMythical}
          />
            <div className="ml-14">
              <p className="text-white">{String(id - 1).padStart(3, 0)}</p>
              <p className="text-white">{prevPokemon.name}</p>
            </div>
          </div>}
      </div>
      <div className="flex flex-col text-center mt-12">
        <p className="text-white text-4xl">{String(id).padStart(3, 0)}</p>
        <p className="text-white text-6xl">{currentPokemon.name}</p>
        <div className="flex m-4 justify-center">
          <PokemonImage 
            pokemonUrl={currentPokemon.pictureUrl}
            name={currentPokemon.name}
            isLegendary={currentPokemon.isLegendary}
            isMythical={currentPokemon.isMythical}
            type={1}
          />
        </div>
        <p className="text-white text-lg">{currentPokemon.description}</p>
      </div>
        <div className="next h-96 w-80 bg-black">
          {nextPokemon && 
          <div className="flex flex-row-reverse">
            <PokemonNavigation 
              id={id+1}
              direction='next'
              pictureUrl={nextPokemon.pictureUrl}
              name={nextPokemon.name}
              isLegendary={nextPokemon.isLegendary}
              isMythical={nextPokemon.isMythical}
            />
            <div className="mr-14">
              <p className="text-white text-right">{String(id + 1).padStart(3, 0)}</p>
              <p className="text-white">{nextPokemon.name}</p>
            </div>          </div>}
        </div>
      </div>
  );
};

export default PokemonInfoPage;
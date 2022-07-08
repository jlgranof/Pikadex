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
    <div className="flex flex-row">
      {prevPokemon && <PokemonNavigation 
        id={id-1}
        direction='previous'
        pictureUrl={prevPokemon.pictureUrl}
        name={prevPokemon.name}
        isLegendary={prevPokemon.isLegendary}
        isMythical={prevPokemon.isMythical}
      />}
      <PokemonImage 
        pokemonUrl={currentPokemon.pictureUrl}
        name={currentPokemon.name}
        isLegendary={currentPokemon.isLegendary}
        isMythical={currentPokemon.isMythical}
      />
      {nextPokemon && <PokemonNavigation 
        id={id+1}
        direction='next'
        pictureUrl={nextPokemon.pictureUrl}
        name={nextPokemon.name}
        isLegendary={nextPokemon.isLegendary}
        isMythical={nextPokemon.isMythical}
      />}
    </div>
  );
};

export default PokemonInfoPage;
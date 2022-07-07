import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import PokemonImage from "../components/PokemonImage.js";

const PokemonInfoPage = () => {
  const fullPokemonList = useSelector(state => state.pokemon.pokemon);
  const [currentPokemon, setCurrentPokemon] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    (async() => {
      if (fullPokemonList) {
        let pokemon = fullPokemonList.filter(p => p.id === Number(id))[0];
        setCurrentPokemon(pokemon);
      }
    })();
  }, [fullPokemonList, id]);

  if (!currentPokemon) return 'Loading...'

  return (
    <div>
      <PokemonImage 
        pokemonUrl={currentPokemon.pictureUrl}
        name={currentPokemon.name}
        isLegendary={currentPokemon.isLegendary}
        isMythical={currentPokemon.isMythical}
      />
    </div>
  );
};

export default PokemonInfoPage;
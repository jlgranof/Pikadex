import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Pokemon from "../components/Pokemon";

const PokemonPage = () => {
  const fullPokemonList = useSelector(state => state.pokemon.pokemon);
  const { id } = useParams();

  return (
    <div className="h-full">
      <Pokemon 
        pokemonList={fullPokemonList}
        id={Number(id)}
        isUserPokedex={false}
      />
    </div>
  );
};

export default PokemonPage;
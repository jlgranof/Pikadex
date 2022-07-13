import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import PokemonListContainer from "../components/PokemonListContainer";

const PokemonListPage = () => {
  const fullPokemonList = useSelector(state => state.pokemon);
  const [pokemon, setPokemon] = useState('')

  useEffect(() => {
    (async() => {
      setPokemon(fullPokemonList.pokemon);
    })();
  }, [fullPokemonList])

  return (
    <div className="h-full">
      <div className="Header">
        <div className="">This is where the featured Pokemon Will Go</div>
      </div>
      <PokemonListContainer 
        pokemons={pokemon}
      />
    </div>
  )
};

export default PokemonListPage;
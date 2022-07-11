import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import PokemonCard from '../components/PokemonCard/PokemonCard';

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
    <div className="h-screen">
      <div className="Header">
        <div className="Featured text-white">This is where the featured Pokemon Will Go</div>
      </div>
      <PokemonListContainer 
        pokemons={pokemon}
      />
    </div>
  )
};

export default PokemonListPage;
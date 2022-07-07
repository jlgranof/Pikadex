import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import PokemonCard from '../components/PokemonCard/PokemonCard';

const PokemonListPage = () => {
  const fullPokemonList = useSelector(state => state.pokemon);
  const [allPokemon, setAllPokemon] = useState([]);
  const [pokemon, setPokemon] = useState('')

  useEffect(() => {
    (async() => {
      setAllPokemon(fullPokemonList.pokemon);
      setPokemon(fullPokemonList.pokemon);
    })();
  }, [fullPokemonList])

  
  const list = Array.isArray(pokemon)
    ? pokemon.map(el => <PokemonCard key={el.id} pokemon={el}/>)
    : 'Loading...'

  return (
    <div>
      <div className="Header">
        <div className="Featured"></div>
        <div className="Search"></div>
        <div className="Advanced-Search"></div>
        <div className="Sort"></div>
      </div>

      <div className="grid poke-grid gap-1.5 w-full">
        {list}
      </div>

    </div>
  )
};

export default PokemonListPage;
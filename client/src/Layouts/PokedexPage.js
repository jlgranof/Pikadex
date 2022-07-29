import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";


import PokemonListContainer from '../components/PokemonListContainer';

import { normalizePokemon } from '../utils/pokedex';

const PokedexPage = () => {
    const pokedexes = useSelector(state => state.pokedex.pokedex.all);
    const { id } = useParams()
    const [pokedex, setPokedex] = useState(null);
    const [pokemons, setPokemons] = useState(null);

    useEffect(() => {
        (async() => {
            if (pokedexes) setPokedex(pokedexes.filter(poke => poke.id === Number(id))[0]);
            if (pokedex) normalizePokemon(pokedex.pokemons);
        })();
    }, [pokedexes, id, pokedex]);

    return (
        <div>
            Pokedex
            <PokemonListContainer 
                // pokemons={pokedex.pokemons}
            />
        </div>
    )
};

export default PokedexPage;
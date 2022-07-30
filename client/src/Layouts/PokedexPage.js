import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import UserPokemonCard from '../components/UserPokemonCard';

const PokedexPage = () => {
    const pokedexes = useSelector(state => state.pokedex.pokedex.all);
    const { id } = useParams()
    const [pokedex, setPokedex] = useState(null);

    useEffect(() => {
        (async() => {
            if (pokedexes) setPokedex(pokedexes.filter(poke => poke.id === Number(id))[0]);
        })();
    }, [pokedexes, id]);

    if (!pokedex) return <p>Loading...</p>

    const pokeList = pokedex.pokemons.map(pokemon => (
        <div className='h-max' key={pokemon.id}>
            <UserPokemonCard pokemon={pokemon}/>
        </div>
    ));

    return (
        <div className='text-2xl m-10 text-center h-screen'>
            <p className='text-3xl m-10'>{pokedex.name}</p>
            {/* <div>This will be the Search Bar</div>
            <div>This will be the Advanced Search Container</div>
             <div>This will be the Sort Container</div> */}
            <div 
                className="grid grid-cols-2 gap-10"
            >
                {pokeList}
            </div>
        </div>
    )
};

export default PokedexPage;
import { useState } from 'react';
import { useSelector } from 'react-redux';

import PokemonListContainer from '../components/PokemonListContainer';

const PokedexPage = ({ id }) => {
    const pokedexes = useSelector(state => state.pokedexes);
    console.log(pokedexes);
    const [pokedex, setPokedex] = useState(null);

    // Create use effect to set up the list of pokemon to pass thru to the ListContainer (filter thru state for id === pokedex.id)
};

export default PokedexPage;
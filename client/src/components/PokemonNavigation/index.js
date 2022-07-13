import { NavLink } from 'react-router-dom'

import PokemonImage from '../PokemonImage/index.js'

const PokemonNavigation = ({ 
  id,
  nationalPokedexNumber, 
  direction, 
  pictureUrl, 
  name, 
  isLegendary, 
  isMythical,
  isUserPokedex
}) => {
  const url = isUserPokedex
    ? ''
    : `/pokemon/${id}`

  return (
    <NavLink to={`/pokemon/${id}`} style={{textDecoration: 'none'}}>
      <div className='flex h-24 w-24 justify-center items-center'>
        <PokemonImage 
          pokemonUrl={pictureUrl}
          name={name}
          isLegendary={isLegendary}
          isMythical={isMythical}
        />
      </div>
    </NavLink>
  );
};

export default PokemonNavigation;
import { NavLink } from 'react-router-dom'
import clsx from 'clsx';

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

  const classes = direction === 'previous'
    ? 'flex-row'
    : 'flex-row-reverse'

  return (
    <NavLink to={`/pokemon/${id}`} style={{textDecoration: 'none'}}>
      <div className={clsx(classes, 'flex items-center justify-center')}>
        <div className='flex h-24 w-24 justify-center items-center'>
          <PokemonImage 
            pokemonUrl={pictureUrl}
            name={name}
            isLegendary={isLegendary}
            isMythical={isMythical}
          />
        </div>
        <p className='m-2'>{name}</p>
        <p>{String(nationalPokedexNumber).padStart(3,0)}</p>
      </div>
    </NavLink>
  );
};

export default PokemonNavigation;
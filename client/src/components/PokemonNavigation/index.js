import { NavLink } from 'react-router-dom'
// import clsx from 'clsx'

import PokemonImage from '../PokemonImage.js'

const PokemonNavigation = ({ 
  id, 
  direction, 
  pictureUrl, 
  name, 
  isLegendary, 
  isMythical,
  type 
}) => {
  return (
    <NavLink to={`/pokemon/${id}`} style={{textDecoration: 'none'}}>
      <PokemonImage 
        pokemonUrl={pictureUrl}
        name={name}
        isLegendary={isLegendary}
        isMythical={isMythical}
        type={1}
      />
    </NavLink>
  );
};

export default PokemonNavigation;
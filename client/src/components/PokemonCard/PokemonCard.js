import { NavLink } from 'react-router-dom';

import PokemonImage from '../PokemonImage/index.js';
import NameCard from '../NameCard/index.js';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className='rounded-2xl border-gray-500 border-2 w-64 h-full text-center items-center bg-gradient-to-tr from-slate-700 to-slate-300 m-2'>
      <NavLink to={`/pokemon/${pokemon.nationalPokedexNumber}`} style={{textDecoration: 'none'}}>
        <div className='flex justify-center items-center w-64 h-64'>
          <PokemonImage 
            pokemonUrl={pokemon.pictureUrl}
            name={pokemon.name}
            isLegendary={pokemon.isLegendary}
            isMythical={pokemon.isMythical}
          />
        </div>
         <div className='h-48'>
           <NameCard 
              nationalPokedexNumber={pokemon.nationalPokedexNumber}
              name={pokemon.name}
              types={pokemon.types}
           />
         </div>
       </NavLink>
     </div>
  )
}

export default PokemonCard;
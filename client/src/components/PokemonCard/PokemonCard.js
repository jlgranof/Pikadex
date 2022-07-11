import { NavLink } from 'react-router-dom';

import PokemonImage from '../PokemonImage.js';

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
         <div className='bg-gradient-to-bl from-slate-700 to-slate-300 info-container-clip rounded-2xl border-t-4 border-b-2 border-x-2 text-white text-xl h-44'>
           <p className='m-3.5 p-1'>{String(pokemon.nationalPokedexNumber).padStart(3, 0)}</p>
           <h1 className='m-3.5 p-1 text-3xl uppercase drop-shadow-lg'>{pokemon.name}</h1>
           <div className="flex flex-row justify-around text-black">
             {pokemon.types.map(type => <p key={type.type.name}>{type.type.name}</p>)}
           </div>
         </div>
       </NavLink>
     </div>
  )
}

export default PokemonCard;
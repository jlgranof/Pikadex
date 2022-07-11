import { NavLink } from 'react-router-dom';

import PokemonImage from '../PokemonImage.js';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className='rounded-2xl border-gray-500 border-2 w-3/4 h-full text-center items-center bg-gradient-to-tr from-slate-700 to-slate-300 m-10'>
      <NavLink to={`/pokemon/${pokemon.nationalPokedexNumber}`} style={{textDecoration: 'none'}}>
        <div className='flex justify-center items-center w-full h-3/5'>
          <PokemonImage 
            pokemonUrl={pokemon.pictureUrl}
            name={pokemon.name}
            isLegendary={pokemon.isLegendary}
            isMythical={pokemon.isMythical}
          />
        </div>
         <div className='bg-gradient-to-bl from-slate-700 to-slate-300 info-container-clip rounded-2xl border-t-4 border-b-2 border-x-2 text-white text-xl h-1/12'>
           <p className='m-3.5 p-1'>{String(pokemon.nationalPokedexNumber).padStart(3, 0)}</p>
           <h1 className='m-2.5 p-1 text-4xl uppercase drop-shadow-lg'>{pokemon.name}</h1>
           <div className="flex flex-row justify-around text-black">
             {pokemon.types.map(type => <p key={type.type.name}>{type.type.name}</p>)}
           </div>
         </div>
       </NavLink>
     </div>
  )
}

export default PokemonCard;
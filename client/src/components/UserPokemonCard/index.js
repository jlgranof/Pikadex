import { NavLink } from "react-router-dom";

import PokemonImage from "../PokemonImage";
import NameCard from "../NameCard";

const UserPokemonCard = ({ pokemon }) => {
  return (
    <div className='flex rounded-2xl border-gray-500 border-2 w-64 h-full text-center items-center bg-gradient-to-tr from-slate-700 to-slate-300 m-2'>
      <NavLink to={`/pokemon/${pokemon.pokemon.nationalPokedexNumber}`} style={{textDecoration: 'none'}}>
        <div className='flex justify-center items-center w-64 h-64'>
          <PokemonImage 
            pokemonUrl={pokemon.pokemon.pictureUrl}
            name={pokemon.pokemon.name}
            isLegendary={pokemon.pokemon.isLegendary}
            isMythical={pokemon.pokemon.isMythical}
          />
        </div>
         <div className='h-48'>
           <NameCard 
              nationalPokedexNumber={pokemon.pokemon.nationalPokedexNumber}
              name={pokemon.pokemon.name}
              types={pokemon.pokemon.types}
           />
         </div>
       </NavLink>
       <div className="">
          This is the UserPokemon Info Part
       </div>
     </div>
  )
}

export default UserPokemonCard;
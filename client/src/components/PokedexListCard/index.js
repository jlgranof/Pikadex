import { NavLink } from "react-router-dom";
import PokemonImage from "../PokemonImage";

const PokedexListCard = ({ pokedex }) => {
  const displayPokemon = pokedex.pokemons.length
    ? pokedex.pokemons[0]
    : {
      pokemonUrl: '',
      name:'none',
      isLegendary:false,
      isMythical:false
    }

  return (
    <div className="rounded-2xl border-gray-500 border-2 w-48 h-full text-center items-center bg-gradient-to-tr from-slate-700 to-slate-300 m-2">
      <NavLink to={`/`} style={{textDecoration: 'none'}}>
        <div>
          <p>{pokedex.name}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default PokedexListCard;
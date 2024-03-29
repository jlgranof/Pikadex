import { NavLink } from "react-router-dom";
import PokemonImage from "../PokemonImage";

const PokedexListCard = ({ pokedex }) => {
  return (
    <div className="rounded-2xl border-gray-500 border-2 w-48 h-full text-center items-center bg-gradient-to-tr from-slate-700 to-slate-300 m-2">
      <NavLink to={`/pokedex/${pokedex.id}`} style={{textDecoration: 'none'}}>
        <div>
          <p className="text-2xl m-2">{pokedex.name}</p>
          <p className="m-2">{pokedex.description}</p>
          
        </div>
      </NavLink>
    </div>
  );
}

export default PokedexListCard;
import { NavLink } from "react-router-dom";

import PokedexListCard from "../PokedexListCard";

const PokedexList = ({
  currentUser,
  pokedexes
}) => {
  const pokedexList = pokedexes.map(pokedex => 
    <div className="h-max" key={pokedex.id}>
      <PokedexListCard 
        pokedex={pokedex}
      />
    </div>
  );

  return (
    <div className='m-5 text-center'>
      <p className="text-2xl m-4">Pokedexes</p>
      <NavLink 
        to={'/create-pokedex'} 
        className='no-underline bg-white rounded-xl p-2'
      >
        Create New Pokedex
      </NavLink>
      <div 
        className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-10 m-20"
      >
        {pokedexList}
      </div> 
    </div>
  );
};

export default PokedexList;
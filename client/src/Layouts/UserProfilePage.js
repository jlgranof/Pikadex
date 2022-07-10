import { useSelector } from "react-redux";

import PokedexListCard from "../components/PokedexListCard";

const UserProfilePage = () => {
  const user = useSelector(state => state.auth.user);
  const pokedexes = useSelector(state => state.pokedex.pokedex.user);

  if (!user || !pokedexes) return <div className="text-white text-xl">Loading...</div>

  const totalPokemon = () => {
    return pokedexes.reduce((count, pokedex) => {
      return count + pokedex.pokemons.reduce((count2, pokemon) => {
        return count2 + 1
      }, 0)
    }, 0);
  }

  return (
    <div className="h-screen">
      <div className="m-8 flex flex-row">
        <div className="flex flex-col border-r-slate-200 border-r-2 w-1/5 h-1/6">
          <p className="text-white text-6xl ml-4">{user.username}</p>
          <img 
            className="w-1/3 mx-auto my-4"
            src={user.avatarUrl} 
            alt={user.username} 
          />
        </div>
        <div className="ml-6">
          <p className="text-white text-2xl m-4">Number of Pokedexes: {pokedexes.reduce((count, el) => count + 1, 0)}</p>
          <p className="text-white text-2xl m-4">Total Number of Pokemon: {totalPokemon()}</p>
        </div>
      </div>
      <div>
        <p className="text-white text-2xl m-8">Pokedexes</p>
        <PokedexListCard 
          pokedex={pokedexes[0]}
        />
      </div>
    </div>
  );
};

export default UserProfilePage;
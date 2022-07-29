import UserInfo from "../UserInfo";
import PokedexList from "../PokedexList";

import { profilePokedexInfo } from '../../utils/pokedex';
import { useEffect, useState } from "react";

const Profile = ({ 
  currentUser,
  user,
  pokedexes
}) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (pokedexes) setInfo(profilePokedexInfo(pokedexes));
  }, [])

  if (!info) return <p>Loading...</p>

  return (
    <div className="h-full flex flex-row m-20">
      <div className='w-2/6 bg-slate-300 border-r-2 rounded-2xl  border-slate-500 h-5/6'>
        <UserInfo 
          currentUser={currentUser}
          user={user}
          info={info}
        />
      </div>
      <div className='w-1/2 h-full'>
        <PokedexList 
          currentUser={currentUser}
          pokedexes={pokedexes}
        />
      </div>
    </div>
  );
};

export default Profile;

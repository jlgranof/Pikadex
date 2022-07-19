import UserInfo from "../UserInfo";
import PokedexList from "../PokedexList";

const Profile = ({ 
  currentUser,
  user,
  pokedexes
}) => {
  return (
    <div className="h-full flex flex-row m-10">
      <div className='w-2/6 bg-slate-300 border-r-2 border-slate-500 h-full'>
        <UserInfo 
          currentUser={currentUser}
          user={user}
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

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Profile from "../components/Profile";

const MyProfilePage = () => {
  const user = useSelector(state => state.auth.user);
  const pokedexes = useSelector(state => state.pokedex.pokedex.user);

  const [userPokedexes, setUserPokedexes] = useState(null);

  useEffect(() => {
      setUserPokedexes(pokedexes);
  }, [pokedexes, userPokedexes, user]);

  if (!user || (user && !Object.values(user).length)) return (<Navigate to="/" />);

  if (!userPokedexes) return <p>Loading...</p>

  return (
    <div className="h-screen">
      <Profile 
        currentUser={true}
        user={user}
        pokedexes={pokedexes}
      />
    </div>
  );
};

export default MyProfilePage;
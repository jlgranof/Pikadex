import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Profile from "../components/Profile";

const MyProfilePage = () => {
  const user = useSelector(state => state.auth.user);
  const pokedexes = useSelector(state => state.pokedex.pokedex.user);

  if (!user || (user && !Object.values(user).length)) return (<Navigate to="/" />);

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
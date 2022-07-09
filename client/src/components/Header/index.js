import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { logout } from "../../store/authSlice";

const Header = ({ isLoaded }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && Object.values(user).length) setLoggedIn(true)
  }, [user])

  const onLogout = () => {
    dispatch(logout());
    setLoggedIn(false);
  }

  let profile = loggedIn 
    ? 'Profile'
    : <NavLink to={'/login'} style={{textDecoration: 'none'}}>Login</NavLink>

  let signup = loggedIn
    ? <button className='mr-4' onClick={onLogout}>Logout</button>
    : <NavLink to={'/signup'} style={{textDecoration:'none'}}>Sign Up</NavLink>

  return (
    <div className="flex justify-between bg-black p-3 mb-3 items-center header">
      <NavLink to={'/pokemon'} style={{textDecoration: 'none'}}>
        <p className="text-white text-2xl ml-4">Pokedex</p>
      </NavLink> 
      <p className="text-white text-2xl">Leaderboard</p>
      <NavLink to={'/'} style={{textDecoration:'none'}}>
        <div className="flex justify-center">
          <div className="flex flex-col">
            <img src='https://cdn.icon-icons.com/icons2/853/PNG/128/Pokemon_Go-16_icon-icons.com_67643.png' alt='Pikadex'/>
            <h1 className="text-white text-2xl">The Pikadex</h1>
          </div>
        </div>
      </NavLink>
      <div className="text-white text-2xl">{profile}</div>
      <div className="text-white text-2xl">{signup}</div>
    </div>
  );
};

export default Header;
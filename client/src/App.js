import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { restoreUser } from './store/authSlice';
import { getAllPokemon } from './store/pokemonSlice';
import { getAllPokedexes, getAllUserPokedexes } from './store/pokedexSlice';

import Header from './components/Header';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import PokemonListPage from './Layouts/PokemonListPage';
import PokemonPage from './Layouts/PokemonPage';
import UserProfilePage from './Layouts/UserProfilePage';

// UPDATE ROOT WHEN LANDING PAGE IS MADE

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.auth.user);
  const pokemon = useSelector(state => state.pokemon);

  useEffect(() => {
    (async () => {
      await dispatch(getAllPokemon());
      await dispatch(getAllPokedexes());
      if (user) await dispatch(getAllUserPokedexes(user))
    })();
  });

  useEffect(() => {
    (async () => {
      await dispatch(restoreUser()).then(() => setIsLoaded(true))
    })();
  }, [dispatch]);

  return (
    <div className="bg-slate-200">
      <Header isLoaded={isLoaded}/>
      {isLoaded && 
        <Routes>
          <Route path="/" element={<PokemonListPage/>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/pokemon" element={<PokemonListPage />} />
          <Route path="/pokemon/:id" element={<PokemonPage />}/>
          <Route path='profile' element={<UserProfilePage />} />
        </Routes>
      }
    </div>
  );
}

export default App;

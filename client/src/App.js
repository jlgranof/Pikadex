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
import MyProfilePage from './Layouts/MyProfilePage';
import PokedexPage from './Layouts/PokedexPage';
import NewPokedexForm from './components/NewPokedexForm';

// UPDATE ROOT WHEN LANDING PAGE IS MADE

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  // const [currentUser, setCurrentUser] = useState(null);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    (async () => {
      await dispatch(restoreUser()).then(() => setIsLoaded(true))
      await dispatch(getAllPokemon());
      await dispatch(getAllPokedexes());
    })();
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      if (user) await dispatch(getAllUserPokedexes(user))
    })();
  }, [dispatch, user]);

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
          <Route path='my-profile' element={<MyProfilePage />} />
          <Route path='/pokedex/:id' element={<PokedexPage />} />
          <Route path='create-pokedex' element={<NewPokedexForm />} />
        </Routes>
      }
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { restoreUser } from './store/authSlice';
import { getAllPokemon } from './store/pokemonSlice';

import Header from './components/Header';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import PokemonListPage from './Layouts/PokemonListPage';
import PokemonInfoPage from './Layouts/PokemonInforPage';

// UPDATE ROOT WHEN LANDING PAGE IS MADE

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(getAllPokemon());
    })();
  });

  useEffect(() => {
    (async () => {
      await dispatch(restoreUser()).then(() => setIsLoaded(true));
    })();
  }, [dispatch]);

  return (
    <div className="bg-slate-900">
      <Header isLoaded={isLoaded}/>
      {isLoaded && 
        <Routes>
          <Route path="/" element={<PokemonListPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/pokemon" element={<PokemonListPage />} />
          <Route path="/pokemon/:id" element={<PokemonInfoPage />}/>
        </Routes>
      }
    </div>
  );
}

export default App;

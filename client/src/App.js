import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { restoreUser } from './store/authSlice';
import { getAllPokemon } from './store/pokemonSlice';

import LoginForm from './components/LoginForm';
import PokemonListPage from './Layouts/PokemonListPage';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(getAllPokemon());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await dispatch(restoreUser());
    })();
  }, [dispatch]);

  return (
    <div className="bg-slate-900">
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/pokemon" element={<PokemonListPage />} />
      </Routes>
    </div>
  );
}

export default App;

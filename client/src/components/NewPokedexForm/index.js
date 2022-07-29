import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createNewPokedex } from '../../store/pokedexSlice';

import { games } from '../../utils/games';

const NewPokedexForm = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const user = useSelector(state => state.auth.user);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [gameId, setGameId] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createNewPokedex({ name, description, userId: user.id, gameId: Number(gameId) }));
    navigate("/my-profile", { replace: true })
  };

  const options = games.map(game => (
    <option value={game[0]}>{game[1]}</option>
  ))

  return (
    <div className='flex flex-row h-screen justify-center'>
      <div className='m-20 border-black border-2 rounded-lg h-1/2 bg-white text-center'>
        <p className='text-2xl mt-10'>Create a New Pokedex!</p>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col m-10 items-center'>
            <label className='m-5 text-xl'>
              Name:
              <input 
                className='rounded-lg m-2 border-slate-900 border-2 focus:p-1'
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </label>
            <label className='flex m-5 text-xl'>
              Description:
              <textarea 
                className='rounded-lg m-2 border-slate-900 border-2 focus:p-1 h-40 resize-none'
                type='text'
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
              />
            </label>
            <label className='m-5 text-xl'>
                Game: 
                <select
                  value={gameId}
                  onChange={e => setGameId(e.target.value)}
                  required
                  className='border-black border-2 m-2 rounded-2xl p-2'
                >
                  {options}
                </select>
            </label>
            <button 
              type="submit"
              className='m-5 p-2 border-slate-900 text-xl bg-slate-200 rounded-2xl'
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPokedexForm;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from '../../store/authSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [errors, setErrors] = useState([]);

  if (user && Object.values(user).length) return (<Navigate to="/" />);

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(login({ username, password }));
  }

  const demoUser = (e, user) => {
    return dispatch(login({ username: user, password: 'password' }));
  }

  return (
    <div className='flex flex-row h-screen justify-center'>
      <div className='m-10 border-black border-2 rounded-lg h-1/2 bg-white'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col m-10 items-center'>
            <label className='m-5 text-xl'>
              Username: 
              <input 
                className='rounded-lg m-2 border-slate-900 border-2'
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
            </label>
            <label className='m-5 text-xl'>
              Password: 
              <input 
                className='rounded-lg m-2 border-slate-900 border-2'
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </label>
            <button 
              type="submit"
              className='m-5 border-slate-900 text-xl bg-slate-100 rounded-2xl'
            >
              Log In
            </button>
          </div>
        </form>
        <div className='mt-10 text-center text-xl'>
          <p className='m-5'>Demo Users</p>
          <div>
            <button
              onClick={(e) => demoUser(e, 'Ash')}
              className='rounded-lg m-2 border-slate-900 border-2 p-2'
            >Ash</button>
          </div>
          <div>
            <button
              onClick={(e) => demoUser(e, 'Brock')}
              className='rounded-lg m-2 border-slate-900 border-2 p-2'
            >Brock</button>
          </div>
          <div>
            <button
              onClick={(e) => demoUser(e, 'Misty')}
              className='rounded-lg m-2 border-slate-900 border-2 p-2'
            >Misty</button>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default LoginForm;
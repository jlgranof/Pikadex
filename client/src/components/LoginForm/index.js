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

  if (user) return (<Navigate to="/" />);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password)
    return dispatch(login({ username, password }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username 
        <input 
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password 
        <input 
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
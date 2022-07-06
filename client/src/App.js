import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment } from './store/authSlice';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
    </div>
  );
}

export default App;

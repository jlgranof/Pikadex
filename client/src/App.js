import { Route, Routes } from 'react-router-dom';

import LoginForm from './components/LoginForm';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import Home from './components/Home';
import "./index.css"

const App = () => {
  return (
 <div className='app'>
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/reset-password' element={<ResetPassword />}/>
        </Routes>
    </Router>
        </div>
  );
}

export default App;

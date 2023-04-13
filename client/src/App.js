import React from 'react';
import './App.css';
import './fonts/Cunia/Cunia.ttf';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './/pages';
import About from './/pages/about';
import Chat from './/pages/chat';
import SignUp from './/pages/form';
import Login from  './/pages/login.js';
import Protected from './pages/protected';
import Basic from './pages/demochat';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/letschat' exact element={<Basic/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/log-in' element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
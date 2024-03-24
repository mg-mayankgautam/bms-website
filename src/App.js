import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import Home from './pages/Home';
import About from './components/About'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <Routes >
        
      <Route  path="/" element={<Layout />}>

      <Route index element={<Home />} />
      {/* <Route path="about" element={<About />} />  */}

    </Route>
    {/* <Route exact path='/' element={<Home/>} /> */}
  </Routes> 
  );
}

export default App;

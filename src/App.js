import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Rent from './Pages/Rent';
import Sell from './Pages/Sell';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
      
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/Rent"  element={<Rent />} />
      <Route path="/About"  element={<About />} />
      <Route path="/Sell"  element={<Sell />} />
      </Routes>
    </BrowserRouter>
      
    </>
      
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Rent from './Pages/Rent';
import Signup from './Pages/Signup'
import SingleProperty from './Pages/SingleProperty'
import Featured from './components/Featured';

import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Signin from './Pages/Signin';
import Sell from './Pages/Sell';

function App() {
  return (
      
    
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/Rent"  element={<Rent />} />
      <Route path="/Rent/properties/:id"  element={<SingleProperty />} />
      <Route path="/Signup"  element={<Signup />} />
      <Route path="/Signin"  element={<Signin />} />
      <Route path="/Sell"  element={<Sell />} />
      </Routes>
    </BrowserRouter>
      
    
      
  );
}

export default App;

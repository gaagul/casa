import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Rent from './Pages/Rent';
import Signup from './Pages/Signup'
import SingleProperty from './Pages/SingleProperty'
import Featured from './components/Featured';

// import Sell from './Pages/Sell';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Signin from './Pages/Signin';

function App() {
  return (
      
    
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<SingleProperty/>}/>
      <Route path="/Rent"  element={<Rent />} />
      <Route path="/Rent/:id"  element={<Rent />} />
      <Route path="/Signup"  element={<Signup />} />
      <Route path="/Signin"  element={<Signin />} />
      </Routes>
    </BrowserRouter>
      
    
      
  );
}

export default App;

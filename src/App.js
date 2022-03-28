import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Featured from './components/featured/Featured';
import Best from './components/best/Best';
import Footer from './components/footer/Footer';
import About from './Pages/About';
import Properties from './Pages/Properties';
import SingleProperty from './Pages/SingleProperty';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Best />
        <Featured />
        <Footer />
        <Routes>
            <Route path="/" exact component />
            <Route path="Properties" exact component={Properties} />
            <Route path="About" exact component={About} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

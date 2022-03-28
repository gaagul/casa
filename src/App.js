import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Properties from './Pages/Properties';
import SingleProperty from './Pages/SingleProperty';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Navbar />
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

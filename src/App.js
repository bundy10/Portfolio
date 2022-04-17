import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js';
import ParticleBackground from './components/background/ParticleBackground';

function App() {
  return (
 <> 
    <Router>
      <Navbar />
      <ParticleBackground/>
      <Routes>
        <Route path='/'/>
      </Routes>
    </Router>
     </>
  );
}

export default App;

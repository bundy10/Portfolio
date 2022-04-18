import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js';
import ParticleBackground from './components/background/ParticleBackground';
import About from './components/pages/about';
import Work from './components/pages/work';
import Blog from './components/pages/blog';

function App() {
  return (
 <> 
    <Router>
      <ParticleBackground className= "particles"/>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </Router>
     </>
  );
}

export default App;

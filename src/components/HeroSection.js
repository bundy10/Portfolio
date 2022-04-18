import React from 'react';
import '../App.css';
import './HeroSection.css';


function HeroSection() {

  return (
    <div className='hero-container'>
      <h1 className='glitch'> 
      <span aria-hidden="true">Hi, <br/> I'm Bundy, <br/> Software Developer <i className="fa-solid fa-cog fa-spin"></i> </span>
      Hi, <br/> I'm Bundy, <br/> Software Developer <i className="fa-solid fa-cog fa-spin"></i></h1>
      <span aria-hidden="true">Hi, <br/> I'm Bundy, <br/> Software Developer</span>



      <p>Hungry To Learn</p>
    </div>
  );
}

export default HeroSection;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Event.css';
import nukkadimage from '../assets/events/nukkad.png';
import andhamod from '../assets/events/images.png';
import treasurehunt from '../assets/events/treasure.jpeg';
import vaachan from '../assets/events/vaachan.jpg';

function Event() {
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const textbox = e.currentTarget.querySelector('.textbox');
    const rect = textbox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    textbox.style.setProperty('--rotateX', `${rotateX}deg`);
    textbox.style.setProperty('--rotateY', `${rotateY}deg`);
    textbox.classList.add('tilt');
  };

  const handleMouseLeave = (e) => {
    const textbox = e.currentTarget.querySelector('.textbox');
    textbox.classList.remove('tilt');
  };

  const handleClick = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="main">
      <h1>Events</h1>
      <div className="eventline">
        <div className="container left-container" onClick={() => handleClick('nukkad')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src={nukkadimage} alt="" />
          <div className="textbox">
            <h2>Nukkad Naatak</h2>
            <small>18/9/24</small>
          
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita hic provident at cum possimus.</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="container right-container" onClick={() => handleClick('andha')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src={andhamod} alt="" />
          <div className="textbox">
            <h2>Andha Mor</h2>
            <small>19/9/24</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita hic provident at cum possimus.</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="container left-container" onClick={() => handleClick('treasure')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src={treasurehunt} alt="" />
          <div className="textbox">
            <h2>Treasure Hunt</h2>
            <small>20/9/24</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita hic provident at cum possimus.</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="container right-container" onClick={() => handleClick('vaachan')} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src={vaachan} alt="" />
          <div className="textbox">
            <h2>Kavita Vaachan</h2>
            <small>21/9/24</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita hic provident at cum possimus.</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;

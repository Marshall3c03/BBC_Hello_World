import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../static/Hello-World-Logo.png';
import '../static/CSS/NavHeader.css';

function NavHeader(props) {
  
    return (
      <div class = "header">
        <Link to='/easteregg'><img id = "easteregg" src = {require('../static/Star.png').default} alt="star"/></Link>
        <img class = "banner-logo"src = {Logo}/><Link to='/'><img onClick={<Link to='/' />} class = "banner-logo"src = {Logo}/></Link>
        <br />
        <div class = "navbar">
          <Link to='/home'><button id = "nav-button">Home</button></Link>
          <Link to='/charts'><button id = "nav-button">Charts</button></Link>
          <Link to='/quiz'><button id = "nav-button">Quiz</button></Link>
          <Link to='/about'><button id = "nav-button">About</button></Link>
        </div>
      </div>
    );
  }
export default NavHeader;
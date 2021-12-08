import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../static/Hello-World-Logo.png';
import '../static/CSS/NavHeader.css';

function NavHeader(props) {
  
    return (
      <div class = "Nav">
        <Link to='/'><img onClick={<Link to='/' />} class = "banner-logo"src = {Logo}/></Link>
        <br />
        <Link to='/home'><button id = "nav-button">Planets</button></Link>
        <Link to='/Earth'><button id = "nav-button">Earth</button></Link>
        <Link to='/charts'><button id = "nav-button">Charts</button></Link>
        <Link to='/quiz'><button id = "nav-button">Quiz</button></Link>
        <Link to='/about'><button id = "nav-button">About</button></Link>
      </div>
    );
  }
export default NavHeader;
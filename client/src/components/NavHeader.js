import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../static/Hello-World-Logo.png';
import '../static/CSS/NavHeader.css';

function NavHeader(props) {
  
    return (
      <div class = "Nav">
        <img class = "banner-logo"src = {Logo}/>
        <br />
        <Link to='/home'><button>Home</button></Link>
        <Link to='/charts'><button id = "nav-button">Charts</button></Link>
        <Link to='/quiz'><button id = "nav-button">Quiz</button></Link>
      </div>
    );
  }
export default NavHeader;
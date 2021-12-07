import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../static/Hello-World-Logo.png';

function NavHeader(props) {
  
    return (
      <div className="Nav">
        <img className="banner-logo"src = {Logo} width = "400px"/>
        <br />
        <Link to='/home'><button>Home</button></Link>
        <Link to='/charts'><button>Charts</button></Link>
        <Link to='/quiz'><button>Quiz</button></Link>
      </div>
    );
  }
export default NavHeader;
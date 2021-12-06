import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../static/Hello-World-Logo.png';


function NavHeader(props) {
  
    return (
      <div className="Nav">
        <img src = {Logo} width = "50%"/>
        <br />
        <Link to='/home'><button>Home</button></Link>
        <Link to='/charts'><button>Charts</button></Link>
        <Link to='/quiz'><button>Quiz</button></Link>
      </div>
    );
  }
export default NavHeader;
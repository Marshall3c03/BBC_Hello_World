import React from "react";
import {Link} from 'react-router-dom';


function NavHeader(props) {
  
    return (
      <div className="App">
        <Link to='/'><button>Home</button></Link>
        <Link to='/charts'><button>Charts</button></Link>
      </div>
    );
  }
export default NavHeader;
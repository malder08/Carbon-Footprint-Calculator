import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../Carbonacalclogo.png';
function results(){
    return(
    <header>
          <Link to="/">
        <img src={logo} alt="Our logo" className="Homelogo"/>
        </Link>
        <h1 className="Pagetitle">
          Results
        </h1>
          </header>
    )
}
export default results
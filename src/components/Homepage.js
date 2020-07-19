import React   from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/Carbonacalclogo.png';
import fire from '../assets/Forestfire.jpg';
import reef from '../assets/NewReefDead.jpg';
import iceburg from '../assets/iceburgnew.jpg';
import animal from '../assets/Pika.jpg';
 
function Homepage() {
  return (
    <body>
      <div>
        <header>
          <img src={logo} alt="Our logo" className="Homelogo"/>
          <nav>
            <ul className="Navhome">
              <Link className="nav-link" to="/Resources">
                <li>Resources</li>
              </Link>
              <Link className="nav-link" to="/Questions">
                <li>Calculator</li>
              </Link>
              <Link className="nav-link" to="/Ourmission">
                <li>Our Mission</li>
              </Link>
            </ul>
          </nav>
        </header>
        <div className="row">
          <div className="column">
            <img className="homeimages forest" src={fire} alt="forest fire image"/>
            <span className="homeimgtext">
              In the past 18 years wildfires have begun to burn double  the amount of land due to global warming.
            </span>
          </div>
          <div className="column">
            <img className="homeimages reef" src={reef} alt="reef image"/> 
            <span className="homeimgtext">
              Roughly 75% of coral reefs have been damaged by carbon emissions.
            </span>
          </div>
          <div className="column">
            <img className="homeimages ice" src={iceburg} alt="iceburg image"/>
            <span className="homeimgtext">
              The polar ice caps are melting at rates six times faster than in the 1990s due to global warming. 
            </span>
          </div>
          <div className="column">
            <img className="homeimages animal" src={animal} alt="animal image"/>
            <span className="homeimgtext">
              Poor resource availability due to global warming has pushed many wildlife  species out of their habitats.
            </span>
          </div>
        </div>
      </div>
    </body>
  )}
  
  export default Homepage;
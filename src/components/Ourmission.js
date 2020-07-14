import React from 'react';
import logo from '../Carbonacalclogo.png';
import recycle from '../worldimg.png'
import treeimg from '../recycle img.png'
import worldimg from '../1tree img.png'
import {Link} from 'react-router-dom';
 function Ourmission() {
      return (
        <div>
          <header>
          <Link to="/">
        <img src={logo} alt="Our logo" className="Homelogo"/>
        </Link>
        <h1 className="Pagetitle">
          Our Mission
        </h1>
          </header>
          <h2 className="MissionStatementTitle">
            Our Mission Statement 
          </h2>
          <p className="statement">
            “Our goal is to design software that takes input of electricity and natural gas usage and then calculates an individual’s carbon footprint.<br />
            With this information, it recommends ways in which individuals can work to lower how much carbon they contribute to the world.”
          </p>
          <h2 className="MissionStatementTitle">
            Why It Is Important To Us
          </h2>
          <p className="statement">
            “We chose this issue because it impacts all of humanity now, and generations to come. We hope through this website we will spread awareness about this issue.<br />
            Along with providing people resources and information on how they personally can help solve this issue.”
          </p>
          <p id="quote">
            “The climate crisis has already been solved. We already have the facts and solutions. All we have to do is wake up and change it.”<br /> - Greta Thunberg
          </p>
          <div className="bottompageimgs">
          <img src={recycle} alt="recycle image"/>
          <img src={worldimg} alt="img of world"/>
          <img src={treeimg} alt="img of tree"/>
          </div>
        </div>
      );
    }
export default Ourmission;
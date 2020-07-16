import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/Carbonacalclogo.png';

function Results(props){

  const { input } = props.location.state;

  const [questions, setQuestions] = useState(input.questions);

  // variable to store footprint value
  const [footprint, setFootprint] = useState();

  // array to store tips
  const [tips, setTips] = useState([]);

  const [scaleWidth, setScaleWidth] = useState();

  const calculate = () => {

    console.log("calculate");

    // have to set temporary values that footprint and tips can be set to at the end of the logic
    var tempFootprint = 32000;
    var tempTips = [];
    var solarPanel = false;
    var electricityBill = 0;
    var milesDriven = 0;
    var tempWidth = 0;

    for (var i = 0; i < questions.length; i++) {
        
        // store the current answer you're checking within the loop
        var answer = questions[i].currentOption;
        // store the options, effects on footprint, tips for that question
        var options = questions[i].options;
        var effects = questions[i].effects;
        var qTips = questions[i].qTips;

        // go through all of the options for that question
        for (var j = 0; j < options.length; j++) {
            // check if the option they selected is equal to the current option in the loop
            if (answer.localeCompare(options[j]) === 0) {

                // if it is, add the corresponding effect (of the same index) to the footprint
                if (i=== 0 && options[j] === "Yes") { // save the fact that the user has solar panels
                    solarPanel = true;
                }
                //run through special cases, last else statement is for normal questions
                if (i === 1) { //electricity bill question
                    if (!solarPanel) {
                        electricityBill = effects[j]; //save value to be calculated in next question
                    }
                } else if (i === 2 ) { //number of people question
                    if (!solarPanel) { // only change if user doesn't have solar panels
                        electricityBill += 5000;
                        electricityBill /= effects[j];
                        electricityBill -= 5000;
                        tempFootprint += electricityBill;
                    } //else change nothing, effect changed in question 1
                } else if (i === 3) { //miles driven
                    milesDriven = effects[j];
                } else if (i === 4) { //mpg
                    tempFootprint += ((milesDriven/effects[j])*20*52)-10400;
                } else if (i === 8) {
                  tempFootprint += tempFootprint * effects[j];
                } else { //regular question, change normally
                    tempFootprint += effects[j];
                }
                

                // do the same for the corresponding tip
                if (qTips[j].localeCompare("none") !== 0) {
                    tempTips.push(qTips[j]);
                }
            }
        }
    }

    // set the state footprint and tip variables to the temporary ones
    setFootprint(tempFootprint);
    setTips(tempTips);

    tempWidth = 100 * ((tempFootprint - 14000) / 36000);
    if (tempWidth > 100) {
      setScaleWidth(100);
    }
    else {
      setScaleWidth(tempWidth);
    }
    console.log(100 * ((tempFootprint - 14000) / 36000));
  }

  var dotStyle = {
    background: '#474747', 
    marginLeft: scaleWidth + '%',
    width: '22px', 
    height: '22px',
    borderRadius: '50%',
    display: 'block',
    position: 'relative',
    top: '-2.5px',
  }

  var barStyle = { 
    background: 'linear-gradient(0.25turn, #41FC3D, #E4C212, #E70000)', 
    margin: '0px 30px', 
    padding: '0px 30px',
    height: '15px',
    borderRadius: '10px',
    display: 'block',
    overflow: 'visible'
  }

  useEffect(() => {
    calculate();
  }, []);

  return(
    <div>
      <header>
        <Link to="/">
          <img src={logo} alt="Our logo" className="Homelogo"/>
        </Link>
        <h1 className="Pagetitle">
          Results
        </h1>
      </header>
      <div style={{margin: '50px 0px'}}>
        <h2>Your Carbon Footprint is Approximately { parseInt(footprint) } Pounds of CO2/Year</h2>
        <div style={{ textAlign: 'center', margin: '0px 30px'}}>
          <h4 style={{float: 'left', display: 'inline-block'}}>Low</h4>
          <h4 style={{display: 'inline-block'}}>Average</h4>
          <h4 style={{float: 'right', display: 'inline-block'}}>High</h4>
        </div>
        <div style={{verticalAlign: 'center'}}>
          <div style={barStyle}>
              <div style={dotStyle}></div>
          </div>
        </div>
      </div>
      <div>
        {tips.length !== 0 ? <h2>Tips</h2> : <h2></h2>}
        {
          tips.map(tip => (
            <li className="tips-li">{ tip }</li>
          ))
        }
      </div>
    </div>
  )
}

export default Results
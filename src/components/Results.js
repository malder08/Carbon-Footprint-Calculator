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

  const calculate = () => {

    console.log("calculate");

    // have to set temporary values that footprint and tips can be set to at the end of the logic
    var tempFootprint = 32000;
    var tempTips = [];
    var solarPanel = false;
    var electricityBill = 0;
    var milesDriven = 0;

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
                } else if (i==3) { //miles driven
                    milesDriven = effects[j];
                } else if (i==4) { //mpg
                    tempFootprint += ((milesDriven/effects[j])*20*52)-10400;
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
  }

  useEffect(() => {
    calculate();
  }, []);

  return(
      <header>
        <Link to="/">
          <img src={logo} alt="Our logo" className="Homelogo"/>
        </Link>
        <h1 className="Pagetitle">
          Results
        </h1>
        <h3>Footprint: { footprint }</h3>
        <h3>Tips: { tips }</h3>
      </header>
  )
}

export default Results
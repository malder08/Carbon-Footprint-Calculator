
import React, { useState } from 'react';

function Questions() {

    // variable and its setter method which will store all our questions and the answer that the user selected
    const [questions, setQuestions] = useState([
        {
            question: "Do you have solar panels?",

            // this part of the object is what will store which option the user has selected
            // we should be able to pass these selections into a function that performs the calculation
            currentOption: "none",
            options: [
                "Yes",
                "No"
            ],
            // stores the value that will be added to carbon footprint if the option with the same index is selected
            effects: [
                -5000, // this is for "Yes"
                0 // this is for "No"
            ],
            // stores the tip that will be added to the tip array if the option with the same index is selected (not sure how we want to reference tips)
            qTips: [
                "none", // this is for "Yes"
                "Tip #1" // this is for "No"
            ]
        },
        {
            question: "How much money do you spend on electricity each month?",
            currentOption: "none",
            options: [
                "$0-75",
                "$75-150",
                "$150-250",
                "$250+",
                "Don't Know"
            ],
            effects: [
                -5000,
                0,
                10000,
                15000,
                0
            ],
            qTips: [
                "none",
                "none",
                "none",
                "Tip #2",
                "none"
            ]
        },
        {
            question: "How many people live in your house?",
            currentOption: "none",
            options: [
                "1-2",
                "3-4",
                "5-6",
                "7+"
            ],
            effects: [ //calculated later
                1.5,
                3.5,
                5.5,
                8
            ],
            qTips: [
                "none",
                "none",
                "none",
                "none",
            ]
        },
        {
            question: "How many times do you have a meal with beef every week?",
            currentOption: "none",
            options: [
                "0",
                "1-7",
                "8-14",
                "15+",
            ],
            effects: [
                -2000,
                0,
                1000,
                2000
            ],
            qTips: [
                "none",
                "none",
                "none",
                "none",
            ]
        },
        {
            question: "Do you eat locally and/or organic?",
            currentOption: "none",
            options: [
                "Neither",
                "Locally",
                "Organic",
                "Both",
            ],
            effects: [
                0,
                0,
                0,
                0
            ],
            qTips: [
                "none",
                "none",
                "none",
                "none",
            ]
        }
    ])

    // variable to store footprint value
    const [footprint, setFootprint] = useState(32000);

    // array to store tips
    const [tips, setTips] = useState([]);

    // changes which option is currently selected using the state setter method
    const changeOption = (index, option) => e => {
        let newArr = [...questions]; // copies current array
        newArr[index].currentOption = option; // performs necessary change to copy of array
    
        setQuestions(newArr); // overwrites old array with new, modified version
    }

    // function for the calculation
    const calculate = () => e => {

        // have to set temporary values that footprint and tips can be set to at the end of the logic
        var tempFootprint = 32000;
        var tempTips = [];
        var solarPanel = false;
        var electricityBill = 0;

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

    // this is what will be displayed
    return (
        <div>
            <div>
            {
            // parse through all of the questions
            questions.map((question, index) => (
                <div>
                    <h4>{ question.question }</h4>
                    <div>
                        {
                        // parse through the options within the question
                        question.options.map(option => (
                            <div>
                                <input 
                                    type="radio"
                                    style={{ display: 'inline-block', marginRight: '5px' }}
                                    checked={ option.localeCompare(question.currentOption) === 0 ? true : false }
                                    onChange={changeOption(index, option)}
                                />
                                <p style={{ display: 'inline-block' }}>{ option }</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            </div>
            <div>
                <button onClick={ calculate() }>Calculate</button>
                <h4>Footprint: { footprint }</h4>
                <h5>Tips: { tips }</h5>
            </div>
        </div>
    )
}

export default Questions
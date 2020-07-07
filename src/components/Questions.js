
import React, { useState } from 'react';

function Questions() {

    // variable and its setter method which will store all our questions and the answer that the user selected
    const [questions, setQuestions] = useState([
        {
            type: "mc",
            question: "Do you have solar panels?",

            // this part of the object is what will store which option the user has selected
            // we should be able to pass these selections into a function that performs the calculation
            currentOption: "none",
            options: [
            "Yes",
            "No"
            ]
        },
        {
            type: "mc",
            question: "How much money do you spend on electricity each month?",
            currentOption: "none",
            options: [
            "$0-75",
            "$75-150",
            "$150-250",
            "$250+",
            "Don't Know"
            ]
        },
        {
            type: "mc",
            question: "How many people live in your house?",
            currentOption: "none",
            options: [
            "1-2",
            "3-4",
            "5+"
            ]        
        },
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

        // have to set temporary value that footprint and tips can be set to at the end of the logic
        var tempFootprint = 32000;
        var tempTips = [];

        for (var i = 0; i < questions.length; i++) {
            
            // store the current answer you're checking within the loop
            var answer = questions[i].currentOption;
            
            // if you're checking the first question (copy this part as an else if)
            if (i === 0) {
                if (answer.localeCompare("Yes") === 0) {
                    // this adds or subtracts from the footprint
                    tempFootprint -= 5000;

                    // this adds to the list of tips, just an example
                    tempTips.push("Tip #1");
                }
                else if (answer.localeCompare("No") === 0) {
                    tempFootprint += 0;
                }
            }

            // for question 2 
            else if (i === 1) {
                if (answer.localeCompare("$0-75") === 0) {
                    tempFootprint -= 5000;
                }
                else if (answer.localeCompare("$75-150") === 0) {
                    tempFootprint += 0;
                }
                else if (answer.localeCompare("$150-250") === 0) {
                    tempFootprint += 10000;
                }
                else if (answer.localeCompare("$250+") === 0) {
                    tempFootprint += 15000;
                }
                else if (answer.localeCompare("Don't Know") === 0) {
                    tempFootprint += 0;
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
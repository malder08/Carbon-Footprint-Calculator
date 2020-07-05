
import React, { useState } from 'react';

function Questions() {

    // variable and its setter method which will store all our questions and the answer that the user selected
    const [questions, setQuestions] = useState([
        {
            type: "mc",
            question: "How many people live in your house?",

            // this part of the object is what will store which option the user has selected
            // we should be able to pass these selections into a function that performs the calculation
            currentOption: "none",

            options: [
            "1-2",
            "3-4",
            "5+"
            ]        
        },
        {
            type: "mc",
            question: "Do you have solar panels?",
            currentOption: "none",
            options: [
            "Yes",
            "No"
            ]
        }
    ])

    // changes which option is currently selected using the state setter method
    const changeOption = (index, option) => e => {
        let newArr = [...questions]; // copies current array
        newArr[index].currentOption = option; // performs necessary change to copy of array
    
        setQuestions(newArr); // overwrites old array with new, modified version
    }

    // this is what will be displayed
    return (
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
    )
}

export default Questions
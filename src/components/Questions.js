import React,  {useState}  from 'react';
import logo from '../assets/Carbonacalclogo.png';
import {Link} from 'react-router-dom';

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
                "Tip #2",
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
                "none"
            ]
        },
        {
            question: "In total, how many miles do you drive in a week, or ride in a car?",
            currentOption: "none",
            options: [
                "0-100",
                "100-300",
                "300+",
                "Don't Know",
            ],
            effects: [
                50,
                150,
                300,
                150
            ],
            qTips: [
                "none",
                "Tip #3",
                "Tip #3",
                "Tip #3"
            ]
        },
        {
            question: "What is your car's average milage (mpg)?",
            currentOption: "none",
            options: [
                "10-20",
                "20-30",
                "30+",
                "Don't Know",
            ],
            effects: [
                15,
                25,
                35,
                25
            ],
            qTips: [
                "none",
                "Tip #4",
                "Tip #4",
                "Tip #4"
            ]
        },
        {
            question: "Do you recycle?",
            currentOption: "none",
            options: [
                "No",
                "Occasionally",
                "Often",
            ],
            effects: [
                1000,
                0,
                -1000
            ],
            qTips: [
                "Tip #5",
                "Tip #5",
                "none",
            ]
        },
        {
            question: "Do you run a compost?",
            currentOption: "none",
            options: [
                "Yes",
                "No",
            ],
            effects: [
                -1000,
                0
            ],
            qTips: [
                "none",
                "Tip #6"
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
                "Tip #7",
                "Tip #7",
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
                "Tip #8",
                "none",
                "none",
                "none",
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

    return  (
        <div>
            <header className="Calcheader">
                <Link to="/">
                    <img src={logo} alt="Our logo" className="HomelogoQ"/>
                </Link>
                <h1 className="Calctitle">
                    Calculator
                </h1>
                <h2 className="CalcDirections">
                    Select the answer that matches you the best, if you are not sure select the "US Average" answer
                </h2>
            </header>
            <div className="CalculatorQ">
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
            </div>
            {/* This is temporary until we finish the calculations, only for testing. */}
            <div>
                <Link to={{
                    pathname: "/results",
                    state: {
                        input: {questions: questions},
                    } 
                }}>
                    <button>Calculate</button>
                </Link>
            </div>
        </div>
    )


}

export default Questions;

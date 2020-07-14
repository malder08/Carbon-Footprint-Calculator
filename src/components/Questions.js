import React,  {useState}  from 'react';
import logo from '../Carbonacalclogo.png';
import {Link} from 'react-router-dom';
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
            question: "If Not, How Much Money Do You Spend On Electricity Each Month?",
            currentOption: "none",
            options: [
            "$0-$75",
            "$75-$150",
            "$150-$250",
            "$250+",
            "$111 US Average"
            ]
        },
        {
            type: "mc",
            question: "How Many People Live In Your House?",
            currentOption: "none",
            options: [
            "1-2",
            "3-4",
            "5+"
            ]
        },
        {
            type: "mc",
            question: "In total, how many miles do you drive in a week, or ride in a car?",
            currentOption: "none",
            options: [
            "0-100 -uses public transportation or bikes, only errands otherwise",
            "100-300 -commutes to work daily, follows a normal routine",
            "300+ -Uber/Taxi driver, drives a lot",
            "250 US Average"
            ]
        },
        {
        type: "mc",
            question: "What Is Your Car's Average Mileage or MPG?",
            currentOption: "none",
            options: [
            "10-20",
            "20-30",
            "30+",
            ]
        },
        {
        type: "mc",
            question: "Do You Recycle?",
            currentOption: "none",
            options: [
            "Yes",
            "No"
            ]
        },
        {
            type: "mc",
                question: "Do Run or Use a Compost?",
                currentOption: "none",
                options: [
                "Yes",
                "No"
                ]
            },
            {
                type: "mc",
                    question: "How Many Times a Week Do You Eat Beef?",
                    currentOption: "none",
                    options: [
                    "0",
                    "1-7",
                    "8-14",
                    "15+"
                    ]
                },
                {
                    type: "mc",
                        question: "Do You Eat Organic and/or Locally?",
                        currentOption: "none",
                        options: [
                        "Neither",
                        "Locally",
                        "Organic",
                        "Both"
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
        <button>
            Calculate
        </button>
        </div>
    )
}

export default Questions;
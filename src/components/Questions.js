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
                "Solar Panels have proven to greatly reduce both your electricity bill and the carbon emissions produced from electrcity-production" // this is for "No"
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
                "Turn off your lights at night. If you work during the day, consider programming your thermostat to set your house temperature lower when you are not home. Make sure to turn off devices that are not actively in use, such as TVs, computers, lamps, etc.",
                "Turn off your lights at night. If you work during the day, consider programming your thermostat to set your house temperature lower when you are not home. Make sure to turn off devices that are not actively in use, such as TVs, computers, lamps, etc.",
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
                "When traveling, consider car-pooling and public transit for work. Riding your bike to your can help the environment and your health. A single individual’s use of their car throughout the week can needlessly cause an abundant amount of carbon emissions every single day. ",
                "When traveling, consider car-pooling and public transit for work. Riding your bike to your can help the environment and your health. A single individual’s use of their car throughout the week can needlessly cause an abundant amount of carbon emissions every single day. ",
                "When traveling, consider car-pooling and public transit for work. Riding your bike to your can help the environment and your health. A single individual’s use of their car throughout the week can needlessly cause an abundant amount of carbon emissions every single day. ",
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
                "For your car, having an economically and environmentally sound car can lead to fewer carbon emissions. The higher the MPG, the fewer the gas stops, the better! Consider the environmental effects of the car you drive and any car you may consider buying in the future. Electric and Hybrid cars can also be great alternatives! ",
                "For your car, having an economically and environmentally sound car can lead to fewer carbon emissions. The higher the MPG, the fewer the gas stops, the better! Consider the environmental effects of the car you drive and any car you may consider buying in the future. Electric and Hybrid cars can also be great alternatives! ",
                "For your car, having an economically and environmentally sound car can lead to fewer carbon emissions. The higher the MPG, the fewer the gas stops, the better! Consider the environmental effects of the car you drive and any car you may consider buying in the future. Electric and Hybrid cars can also be great alternatives! "
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
                "Recycling can greatly reduce pollution to our air and to the ocean. There are several recycling depots across most states and in neighborhoods. Ask your HOA president for more information on recycling in your neighborhood.",
                "Recycling can greatly reduce pollution to our air and to the ocean. There are several recycling depots across most states and in neighborhoods. Ask your HOA president for more information on recycling in your neighborhood.",
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
                "Composting is a great way to make the most out of all the organic nutrients that can come from our waste products that we usually throw away. Composting can lead to producing some of the most mineral-rich soil conditioners for your home garden or lawn. "
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
                "Poultry or fish can be a great substitute for protein in meals. Beef actually has the highest Methane production than any other consumable meat. Methane is extremely detrimental to the climate.",
                "Poultry or fish can be a great substitute for protein in meals. Beef actually has the highest Methane production than any other consumable meat. Methane is extremely detrimental to the climate.",
            ]
        },
        {
            question: "How often do you eat locally?",
            currentOption: "none",
            options: [
                "Never",
                "Occasionally",
                "Often",
            ],
            effects: [
                0.01,
                -0.03,
                -0.05
            ],
            qTips: [
                "Eating locally means that you are protecting the small farmland that is environmentally conscious of its effects, rather to the large corporations who are less aware of its effects. Purchasing foods from local farmers markets can greatly support small farmland.",
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
                    Select the answer that matches you the best.
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
            <div style={{textAlign: 'center'}}>
                <Link to={{
                    pathname: "/results",
                    state: {
                        input: {questions: questions},
                    } 
                }}>
                    <button className="calc-button">Calculate</button>
                </Link>
            </div>
        </div>
    )


}

export default Questions;

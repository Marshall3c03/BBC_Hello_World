import React, { useEffect, useState } from 'react';
import '../static/CSS/PlanetQuiz.css'

const generateRandomNumber = (questions) => {
    return Math.floor(Math.random()*questions.length);
}

const PlanetQuiz = () => {

    const [score,setScore] = useState(0);
    const [answeredQeustions, setAnsweredQuestions] = useState([])
    const [isIncorrect,setIsIncorrect] = useState(false);
    const [isCorrect,setIsCorrect] = useState()
    const [questions, setQuestions] = useState([

        {
            phrase: "Where is the asteroid belt?",
            answer: ["Between Earth and Venus", "Between Jupiter and Saturn", "Between Earth and Mars", "Between Mars and Jupiter"],
            fact: "The asteroid belt is found in a region between the planets Mars and Jupiter",
            correctAnswer: "Between Mars and Jupiter"
        },
        {
            phrase: "Which of these planets is the smallest?",
            answer: ["Uranus", "Earth", "Jupiter", "Mercury"],
            fact: "Mercury is 4,879km Wide and is the smallest planet",
            correctAnswer: "Mercury"
        },
        {
            phrase: "What is the Sun mainly made from?",
            answer: ["Liquid lava", "Gas", "Rock", "Molten iron"],
            fact: "The Sun is mainly made from hydrogen and helium gas",
            correctAnswer: "Gas"
        },
        {
            phrase: "What are comets mostly made of?",
            answer: ["Rusty metal", "Dirty ice and dust", "Hot, liquid rock", "Poisonous liquid"],
            fact: "Comets are mostly made of snow, ice and dust.",
            correctAnswer: "Dirty ice and dust"
        },
        {
            phrase: "Which of these best describes the atmosphere surrounding Venus?",
            answer: ["Bright and sunny", "Cold and snowy", "Cold and wet", "Hot and Poisonous"],
            fact: "Venus is surrounded by thick, acidic clouds around 50km above its surface.",
            correctAnswer: "Hot and Poisonous"
        },
        {
            phrase: "Which is the closest planet to the Sun?",
            answer: ["Mercury", "Venus", "Neptune", "Earth"],
            fact: "Mercury is the closest planet to the sun",
            correctAnswer: "Mercury"
        },
        {
            phrase: "How many moons does Mars have?",
            answer: ["50 Moons", "1 Moon", "13 Moons", "2 Moons"],
            fact: "Mars has two moons.",
            correctAnswer: "2 Moons"
        },
        {
            phrase: "What is the Great Red Spot on Jupiter?",
            answer: ["A crater", "A storm", "A volcano", "A lake"],
            fact: "The Great Red Spot is a massive storm in Jupiter's atmosphere",
            correctAnswer: "A storm"
        },
        {
            phrase: "Which planet do the moons Oberon and Titania belong to?",
            answer: ["Earth", "Jupiter", "Uranus", "Venus"],
            fact: "Oberon and Titania are two of Uranus's 27 moons.",
            correctAnswer: "Uranus"
        },
        {
            phrase: "The largest volcano in the Solar System is called Olympus Mons. Which planet holds it?",
            answer: ["Earth", "Mars", "Jupiter", "Venus"],
            fact: "Olympus Mons, the largest volcano in the Solar System, is on Mars.",
            correctAnswer: "Mars"
        },
    ])

    const [randomNumber,setRandomNumber] = useState(generateRandomNumber(questions))

    const currentQuestion = questions[randomNumber]
    const optionTitles = [
        "A",
        "B",
        "C",
        "D"]

    const [incorrectGuesses,setIncorrectGuesses] = useState([])
    const [correctGuesses,setCorrectGuesses] = useState([])

    const handleAnsweredQuestion = (choice, index) => {
        if (choice === currentQuestion.correctAnswer){
            const remainingAvailableQuestions = questions.filter(question => {
                return question.phrase !== currentQuestion.phrase}
            )
            console.log("Correct")
            setIsIncorrect(false)
            setIsCorrect(true)
            setTimeout(()=> {
                setScore(score + 1);
                setAnsweredQuestions([...answeredQeustions,currentQuestion])
                setQuestions(remainingAvailableQuestions)
                setRandomNumber(generateRandomNumber(remainingAvailableQuestions))
                setIncorrectGuesses([])
                setCorrectGuesses([])
                setIsCorrect(false)
            },3000)
            setCorrectGuesses([...correctGuesses, index])
        } else {
            setIncorrectGuesses([...incorrectGuesses, index])
            console.log("Incorrect")
            setIsIncorrect(true);
        }
    }
    
    const handleReset = () => {
        setQuestions(answeredQeustions);
        setAnsweredQuestions([]);
        setScore(0);
        setIsIncorrect(false);
    }

    const getClassName = (index) => {
        if (isIncorrect && incorrectGuesses.includes(index)){
            return 'wrong-container'
        } else if (correctGuesses.includes(index)){
            return 'right-container'
        } else {
            return 'choice-container'
        }
    }
    return(

        <div className="container">
            <div id="home" className="flex-center flex-column">
                <h1>Quick Planet Quiz!</h1>
                <h3 className="score">Score: {score}</h3>
                {questions.length > 0 ? (<div id="game" className="justify-center flex-column">
                    <h2 id="question">{currentQuestion.phrase}</h2>
                    {questions[randomNumber].answer.map((choice, index) => (
                        <div onClick={()=>{
                            handleAnsweredQuestion(choice, index)
                        }} className={getClassName(index)}>
                            <p className="choice-prefix">{optionTitles[index]}</p>
                            <p className='choice-text'>{choice}</p>
                        </div>
                    ))}
                    {isIncorrect && <p>Sorry that's Incorrect</p>}
                    {isCorrect && <p className="fact">{currentQuestion.fact}</p>} 
                </div>) : 
                (<div>
                    <h1>Game Over</h1>
                    <button onClick={handleReset}>Restart</button>
                </div>)
                }
                {/* <a href="#quiz">Go To Quiz</a> */}
            </div>
        </div> 
    )
}

export default PlanetQuiz;
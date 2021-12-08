import React, { useEffect, useState } from 'react';
import '../static/CSS/PlanetQuiz.css'

    const optionTitles = [
        "A", "B", "C", "D"
    ]

    const generateRandomNumber = (questionsList) => {
        return Math.floor(Math.random()*questionsList.length);
    }

const PlanetQuiz = () => {

    const [questionsList,setQuestionsList] = useState([])
    const [score,setScore] = useState(0);
    const [answeredQeustions, setAnsweredQuestions] = useState([])
    const [isIncorrect,setIsIncorrect] = useState(false);
    const [isCorrect,setIsCorrect] = useState(false)
    const [currentQuestion,setCurrentQuestion] = useState(null)
    const [incorrectGuesses,setIncorrectGuesses] = useState([])
    const [correctGuesses,setCorrectGuesses] = useState([])

    const loadQuestions = url => {
        fetch("http://localhost:5000/api/questions")
        .then(result => result.json())
        .then(questionsJson => {
            setQuestionsList(questionsJson)
            setCurrentQuestion(questionsJson[generateRandomNumber(questionsJson)])
        })
    }

    useEffect(()=>{
        loadQuestions();
    },[])

    const handleAnsweredQuestion = (choice, index) => {
        if (choice === currentQuestion.correctAnswer){
            const remainingAvailableQuestions = questionsList.filter(question => {
                return question._id !== currentQuestion._id}
            )
            console.log("Correct")
            setIsIncorrect(false)
            setIsCorrect(true)
            setTimeout(()=> {
                setScore(score + 1);
                setAnsweredQuestions([...answeredQeustions,currentQuestion])
                setQuestionsList(remainingAvailableQuestions)
                setCurrentQuestion(remainingAvailableQuestions[generateRandomNumber(remainingAvailableQuestions)])
                setIncorrectGuesses([])
                setCorrectGuesses([])
                setIsCorrect(false)
                setIsIncorrect(false)
            },2500)
            setCorrectGuesses([...correctGuesses, index])
        } else {
            setIncorrectGuesses([...incorrectGuesses, index])
            console.log("Incorrect")
            setIsIncorrect(true);
        }
    }
    
    const handleReset = () => {
        setQuestionsList(answeredQeustions);
        setCurrentQuestion(answeredQeustions[generateRandomNumber(answeredQeustions)])
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
                <div className="score">Score <h1>{score}</h1></div>
                {questionsList.length > 0 && currentQuestion? (<div id="game" className="justify-center flex-column">
                    <h2 id="question">{currentQuestion.phrase}</h2>
                    {currentQuestion.answer.map((choice, index) => (
                        <div id ="answers" key={choice} onClick={()=>{
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
                    <button id="restart" onClick={handleReset}>Restart</button>
                </div>)
                }
            </div>
        </div> 
    )
}

export default PlanetQuiz;
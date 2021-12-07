import React, { useEffect, useState } from 'react';
import '../static/CSS/PlanetQuiz.css'

const PlanetQuiz = () => {

    const [isLoaded,setIsLoaded] = useState(false)
    const [questionsList,setQuestionsList] = useState([])

    const loadQuestions = url => {
        fetch("http://localhost:5000/api/questions")
        .then(result => result.json())
        .then(questionsJson => setQuestionsList(questionsJson))
    }

    const checkLoaded = (()=> {
        if (questionsList.length > 0){
            setIsLoaded(true)
        }
    })

    useEffect(()=>{
        loadQuestions();
        checkLoaded();
    },[questionsList])

    const generateRandomNumber = (questionsList) => {
        return Math.floor(Math.random()*questionsList.length);
    }

    const [score,setScore] = useState(0);
    const [answeredQeustions, setAnsweredQuestions] = useState([])
    const [isIncorrect,setIsIncorrect] = useState(false);
    const [isCorrect,setIsCorrect] = useState()

    const [randomNumber,setRandomNumber] = useState(generateRandomNumber(questionsList))

    const currentQuestion = questionsList[randomNumber]
    const optionTitles = [
        "A",
        "B",
        "C",
        "D"]

    const [incorrectGuesses,setIncorrectGuesses] = useState([])
    const [correctGuesses,setCorrectGuesses] = useState([])

    const handleAnsweredQuestion = (choice, index) => {
        if (choice === currentQuestion.correctAnswer){
            const remainingAvailableQuestions = questionsList.filter(question => {
                return question.phrase !== currentQuestion.phrase}
            )
            console.log("Correct")
            setIsIncorrect(false)
            setIsCorrect(true)
            setTimeout(()=> {
                setScore(score + 1);
                setAnsweredQuestions([...answeredQeustions,currentQuestion])
                setQuestionsList(remainingAvailableQuestions)
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
        setQuestionsList(answeredQeustions);
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
            {isLoaded && <div id="home" className="flex-center flex-column">
                <h1>Quick Planet Quiz!</h1>
                <h3 className="score">Score: {score}</h3>
                {questionsList.length > 0 ? (<div id="game" className="justify-center flex-column">
                    <h2 id="question">{currentQuestion.phrase}</h2>
                    {questionsList[randomNumber].answer.map((choice, index) => (
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
            </div>}
        </div> 
    )
}

export default PlanetQuiz;
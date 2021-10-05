import React, { useState, useEffect, useRef } from 'react'
import { quizzes } from '../data/quizzes'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

export default function QuizHtml({ htmlAnswers, setHtmlAnswers, QAnswered, setQAnswered }) {


    const [currentQ, setCurrentQ] = useState(0)
    const [answers, setAnswers] = useState([])
    const [showButton, setShowButton] = useState(false)
    const htmlQuiz = quizzes[0]
    const questions = htmlQuiz.questions
    const wrongAnswers = questions[currentQ].incorrectAnswers
    const correctAnswer = questions[currentQ].correctAnswer


    useEffect(() => {

        wrongAnswers.push(correctAnswer)

        let randomIndex = Math.floor(Math.random() * wrongAnswers.length);
        const tmp = wrongAnswers[randomIndex]
        wrongAnswers[randomIndex] = wrongAnswers[3]
        wrongAnswers[3] = tmp
        setAnswers(wrongAnswers)
    }, [currentQ, correctAnswer, wrongAnswers])

    const rightAns = useRef()


    const nextQuestion = (e) => {
        if (e.target.innerText === correctAnswer) {
            e.target.style.color = 'green'
        } else {
            rightAns.current.style.color = 'green'
            e.target.style.color = 'red'
        }
        setTimeout(() => {
            if (currentQ < questions.length - 1) {
                setCurrentQ(currentQ + 1)
            } else {
                setShowButton(true)
            }
            if (e.target.innerText === correctAnswer && htmlAnswers < questions.length) {
                setHtmlAnswers(htmlAnswers + 1)

            }
            setQAnswered(QAnswered + 1)

        }, 400)

    }

    return (

        <div className='question-container'>
            <h1 className='html-title'>HTML</h1>
            <h1 className='question'>{questions[currentQ].text}</h1>
            <ul className='answers' >
                {answers ? answers.map(x => <li onClick={nextQuestion} key={uuidv4()} ref={x === correctAnswer ? rightAns : null}>{x}</li>) : <h1>Loading</h1>}
            </ul>
            <div className="button">
                <Link className={showButton ? 'showButton' : 'dontShow'} to={QAnswered >= 7 ? '/results' : '/QuizCss'} >{QAnswered >= 7 ? 'Go to Results' : 'Next Quiz'}</Link>
            </div>
        </div>
    )
}

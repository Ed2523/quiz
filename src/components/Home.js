import React from 'react'
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className='home-screen'>
            <Link id='html' to={`/QuizHtml`}>Html Quiz</Link>
            <Link id='css' to={`/QuizCss`}>Css Quiz</Link>
        </div>
    )
}

export default Home

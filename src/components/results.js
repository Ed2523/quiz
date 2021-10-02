import React from 'react'
import { getMessage } from '../data/messages'

function Results({ htmlAnswers, cssAnswers }) {
    return (
        <div className='results'>

            <h1>You got {htmlAnswers} from 4 in the Html section</h1>
            <h1>You got {cssAnswers} from 3 in the Css section</h1>
            <span>{htmlAnswers + cssAnswers} correct answers from 7</span>
            <span>{getMessage()}</span>
        </div>
    )
}

export default Results

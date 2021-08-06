import React from 'react'
import { Link } from 'react-router-dom';
import './css/QuestionList.css'
// Presentational Component
const QuestionList = ({questions}) => {

    //console.log(questions);
    return (
        <div>
            {
                questions.sort((a,b)=> b.timestamp -a.timestamp ).map(q => (
                    <div key={q.id} className="question-info">
                        <span className="question-info-option">{q.optionOne.text}</span>
                        <span>OR</span>
                        <span className="question-info-option">{q.optionTwo.text}</span>
                        <Link className="question-info-link" to={`/question/${q.id}`}> View Question </Link>
                    </div>
                    
                ))
            }
            
        </div>
    )
}

export default QuestionList

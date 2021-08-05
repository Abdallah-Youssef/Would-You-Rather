import React from 'react'
import Question from './Question';

// Presentational Component
const QuestionList = ({questions}) => {

    //console.log(questions);
    return (
        <div>
            {
                questions.map(q => (<Question key={q.id} question={q}/>))
            }
            
        </div>
    )
}

export default QuestionList

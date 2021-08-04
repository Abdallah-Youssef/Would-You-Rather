import React from 'react'

export const QuestionList = ({questions}) => {
    return (
        <div>
            {
            questions.map(q => (
                <div className={option}>{q.optionOne.text}</div>
            ))}
        </div>
    )
}

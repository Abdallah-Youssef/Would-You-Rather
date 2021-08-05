import React from 'react'

const Question = ({question}) => {
    return (
        <div>
            "Avatar" Would You rather
            <button>{question.optionOne.text}</button>
            <button>{question.optionTwo.text}</button>
        </div>
    )
}


export default Question
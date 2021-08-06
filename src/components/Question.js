import { Button } from 'react-bootstrap';
import React from 'react'
import { connect } from 'react-redux'
import './css/Question.css'
import { handleSubmitQuestion } from '../actions/shared';

const Question = ({ author, question, answered, dispatch }) => {
    function submitAnswer (option){
        dispatch(handleSubmitQuestion({question, option}))
    }


    if (!answered)
        return (

            <div className="question">
                <h1>{author.name} asks would you rather:</h1>

                <div className="question-options">
                    <Button className="question-option" variant="success" onClick={()=>submitAnswer("optionOne")}>{question.optionOne.text}</Button>
                    <Button className="question-option" variant="success" onClick={()=>submitAnswer("optionTwo")}>{question.optionTwo.text}</Button>
                </div>
            </div>
        )

    else return (
        <div>Answered</div>
    )
}

function mapStateToProps(state, props) {
    //console.log("Props :::::::::::::", props);
    let { questionID } = props.match.params
    let question = state.questions[questionID]

    let user = state.users[state.authedUser]
    let answered = user.answers[questionID] ? true : false

    return {
        question,
        answered,
        author: state.users[question.author]
    }
}

export default connect(mapStateToProps)(Question)
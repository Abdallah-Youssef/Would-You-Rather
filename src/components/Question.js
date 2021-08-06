import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './css/Question.css'
import { handleSubmitQuestion } from '../actions/shared';
import Results from './Results'
import Avatar from './Avatar'
import { withRouter } from 'react-router-dom';


const Question = ({ author, question, answered, dispatch, user }) => {
    const [usersAnswer, setUsersAnswer] = useState("")

    useEffect(() => {
        if (question) {

            const option = user.answers[question.id]
            if (option)
                setUsersAnswer(question[option].text)
        }

    }, [])

    function submitAnswer(option) {
        dispatch(handleSubmitQuestion({ question, option }))
        setUsersAnswer(question[option].text)
    }

    if (!question) {
        return (<h1 style={{width:"100%", textAlign:"center"}}>404 Question not found</h1>)
    }


    return (

        <div className="question">
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Avatar avatarURL={author.avatarURL} />
                <h4 style={{ margin: "2em" }}>{author.name} asks would you rather:</h4>
            </div>


            <div className="question-options">
                <Button
                    className="question-option"
                    variant={usersAnswer === question.optionOne.text ? "success" : "secondary"}
                    onClick={() => submitAnswer("optionOne")}
                    disabled={answered}
                >
                    {question.optionOne.text}
                </Button>


                <Button
                    className="question-option"
                    variant={usersAnswer === question.optionTwo.text ? "success" : "secondary"}
                    onClick={() => submitAnswer("optionTwo")}
                    disabled={answered}>
                    {question.optionTwo.text}
                </Button>
            </div>

            {
                answered &&
                <Results question={question} />
            }
        </div>
    )


}

function mapStateToProps(state, props) {
    let { questionID } = props.match.params
    if (!state.questions[questionID]) {
        return {}
    }

    let question = state.questions[questionID]

    let user = state.users[state.authedUser]
    let answered = user.answers[questionID] ? true : false

    return {
        question,
        answered,
        author: state.users[question.author],
        user
    }
}


export default connect(mapStateToProps)(Question)
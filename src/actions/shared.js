import { getData, setUsers, saveQuestionAnswer, saveQuestion } from "../API";
import { showLoading, hideLoading } from 'react-redux-loading'
import { userLogIn } from "./users";
import { setAuthedUser } from './authedUser'

export const SUBMIT_ANSWER = "SUBMIT_ANSWER"
export const INITIAL_DATA = "INITIAL_DATA"
export const ADD_QUESTION = "ADD_QUESTION"

function initalData({ questions, users }) {
    return {
        type: INITIAL_DATA,
        questions, users
    }
}

function submitAnswer({ questionID, userID, option }) {
    return {
        type: SUBMIT_ANSWER,
        questionID, userID, option
    }
}

function addQuestion(formattedQuestion){
    return {
        type: ADD_QUESTION,
        question: formattedQuestion
    }
}

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())

        getData()
            .then(([users, questions]) => {
                dispatch(initalData({ users, questions }))
                dispatch(hideLoading())
            })
    }
}

export function handleSignIn({ name, avatarURL }, history) {
    return (dispatch, getState) => {
        dispatch(userLogIn({ name, avatarURL }))
        dispatch(setAuthedUser(name))

        dispatch(showLoading())
        setUsers(getState().users).then(() => {
            history.push('/')
            dispatch(hideLoading())
        }
        )

    }
}

export function handleSubmitQuestion({ question, option }) {
    return (dispatch, getState) => {

        let userID = getState().authedUser
        // Optimistic update
        dispatch(submitAnswer({ userID, questionID: question.id, option }))

        setUsers(getState().users)
            .then(() => saveQuestionAnswer(userID, question.id, option))
            .then(() => getData())
            .then(([users, questions]) => console.log(
                "Data in _DATA.js: ", users, questions
            ))

    }
}

export function handleAddQuestion(optionOne, optionTwo){
    return (dispatch, getState) => {
        const authedUser = getState().authedUser

        dispatch(showLoading())

        saveQuestion(optionOne, optionTwo, authedUser)
        .then(formattedQuestion => {
            console.log(formattedQuestion);
            dispatch(addQuestion(formattedQuestion))

            dispatch(hideLoading())
        }) 
    }
}

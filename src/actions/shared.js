import { getData, setUsers } from "../API";
import { showLoading, hideLoading } from 'react-redux-loading'
import { initialUsers, userLogIn, userSubmitAnswer } from "./users";
import { initialQuestions, questionSubmitAnswer } from './questions'
import { setAuthedUser } from './authedUser'

export const SUBMIT_ANSWER = "SUBMIT_ANSWER"


export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())

        getData()
            .then(([users, questions]) => {
                dispatch(initialUsers(users))
                dispatch(initialQuestions(questions))
                dispatch(hideLoading())
            })



    }
}


export function handleSignIn({ name, avatarURL }, history) {
    return (dispatch, getState) => {
        // Optimistic update
        dispatch(userLogIn({ name, avatarURL }))
        dispatch(setAuthedUser(name))

        // setUsers is always successfull
        dispatch(showLoading())
        setUsers(getState().users).then(() => {
            history.push('/')
            dispatch(hideLoading())
        }
        )

    }
}

export function submitAnswer({questionID, userID, option}){
    return {
        type: SUBMIT_ANSWER,
        questionID, userID, option
    }
}

export function handleSubmitQuestion ({question, option}){
    return (dispatch, getState) => {

        let userID = getState().authedUser
        dispatch(submitAnswer({userID, questionID: question.id, option}))

        
    }
}

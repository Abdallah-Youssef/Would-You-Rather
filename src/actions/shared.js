import { getData } from "../API";
import {showLoading, hideLoading} from 'react-redux-loading'
import { initialUsers, userLogIn } from "./users";
import { initialQuestions} from './questions'
import {setAuthedUser} from './authedUser'

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


export function handleSignIn({name, avatarURL}){
    return (dispatch, getState) => {
        dispatch(userLogIn({name, avatarURL}))
        dispatch(setAuthedUser(name))
        
        //setUsers(getState().users)
    }
}

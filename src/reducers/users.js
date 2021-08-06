import {
    INITIAL_USERS,
    LOG_IN, 
} from '../actions/users'

import {SUBMIT_ANSWER} from '../actions/shared'



function userReducer (state={}, action){
    switch (action.type) {
        case LOG_IN:
            // Update avatarURL if it is given
            action.avatarURL = !action.avatarURL ? state.avatarURL : action.avatarURL            
            return {
                ...state,
                avatarURL: action.avatarURL
            }

        case SUBMIT_ANSWER:
            // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n\n\n\n\n\n\n\n\n");
            // console.log(state.answers);
            // console.log(action.questionID);
            // console.log([...(state.answers), action.questionID]);
            return {
                ...state,
                answers: {...(state.answers), [action.questionID]: action.option}
            }
    
        default:
            return state
    }
}

function newUser(action){
    return {
        name:action.name,
        avatarURL: action.avatarURL ? action.avatarURL : "./avatar.png",
        id: action.id,
        answers: {},
        questions: []
    }
}

export default function users(state={},action){
    switch (action.type) {
        case INITIAL_USERS:
            return action.users

        
        case LOG_IN:
            return {
                ...state, 
                [action.id]: state[action.id] ? userReducer(state[action.id], action) : newUser(action)
            }
        
        
        case SUBMIT_ANSWER: 
            return {
                ...state,
                [action.userID]: userReducer(state[action.userID], action)
            }
    
        default:
            return state
    }
}
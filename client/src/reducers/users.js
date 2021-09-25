import {
    LOG_IN, 
} from '../actions/users'

import {INITIAL_DATA, SUBMIT_ANSWER, ADD_QUESTION} from '../actions/shared'


// {
//     "id": "johndoe",
//     "name": "John Doe",
//     "avatarURL": "./john_doe.png",
//     "answers": {
//         "xj352vofupe1dqz9emx13r": "optionOne",
//         "vthrdm985a262al8qx3do": "optionTwo",
//         "6ni6ok3ym7mf1p33lnez": "optionTwo"
//     },
//     "questions": [
//         "6ni6ok3ym7mf1p33lnez",
//         "xj352vofupe1dqz9emx13r"
//     ]
// }

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
            return {
                ...state,
                answers: {...(state.answers), [action.questionID]: action.option}
            }

        case ADD_QUESTION:
            return {
                ...state,
                questions: [...state.questions, action.question.id]
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
        case INITIAL_DATA:
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

        case ADD_QUESTION:
            return {
                ...state, 
                [action.question.author] : userReducer(state[action.question.author], action)
            }
    
        default:
            return state
    }
}
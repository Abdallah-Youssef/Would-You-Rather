import {
    INITIAL_USERS,
    LOG_IN
} from '../actions/users'



function userReducer (state={}, action){
    switch (action.type) {
        case LOG_IN:
            // Update avatarURL if it is given
            action.avatarURL = !action.avatarURL ? state.avatarURL : action.avatarURL            
            return {
                ...state,
                avatarURL: action.avatarURL
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
    
        default:
            return state
    }
}
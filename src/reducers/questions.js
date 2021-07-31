import {INITIAL_QUESTIONS} from '../actions/questions'


export default function questions(state={}, action){
    switch (action.type) {
        case INITIAL_QUESTIONS:
            return action.questions
    
        default:
            return state
    }
}
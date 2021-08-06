import { INITIAL_DATA, SUBMIT_ANSWER } from '../actions/shared'

// {
//     "id": "am8ehyc8byjqgar0jgpub9",
//     "author": "sarahedo",
//     "timestamp": 1488579767190,
//     "optionOne": {
//         "votes": [],
//         "text": "be telekinetic"
//     },
//     "optionTwo": {
//         "votes": [
//             "sarahedo"
//         ],
//         "text": "be telepathic"
//     }
// }
function option(state = {}, action) {
    switch (action.type) {
        case SUBMIT_ANSWER:
            return {
                ...state,
                votes: [...state.votes, action.userID]
            }

        default: return state
    }
}

function question(state = {}, action) {
    // console.log("State =", state);
    // console.log(state[action.option]);
    switch (action.type) {
        case SUBMIT_ANSWER:
            return {
                ...state,
                [action.option]: option(state[action.option], action)
            }

        default: return state
    }
}


export default function questions(state = {}, action) {
    // console.log("State : ", state);
    //console.log(state[action.questionID]);
    switch (action.type) {
        case INITIAL_DATA:
            return action.questions

        case SUBMIT_ANSWER:
            return {
                ...state,
                [action.questionID]: question(state[action.questionID], action)
            }
        default:
            return state
    }
}
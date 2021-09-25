const mongoose = require('mongoose')

const Schema = mongoose.Schema


// {
//     "author": "sarahedo",
//     "timestamp": 1467166872634,
//     "optionOne": {
//         "votes": [
//             "sarahedo"
//         ],
//         "text": "have horrible short term memory"
//     },
//     "optionTwo": {
//         "votes": [],
//         "text": "have horrible long term memory"
//     }
// },

 
const questionSchema = new Schema(
    {
        author:{
            type: String,
            required: true
        },
        optionOne:{
            votes: [String],
            text: String,
        },
        optionTwo:{
            votes: [String],
            text: String,
        },
        answers: Object,
        questions: [String]
    },
)

const Question = mongoose.model('Question', questionSchema)
module.exports = Question
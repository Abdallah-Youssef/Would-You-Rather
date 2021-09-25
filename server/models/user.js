const mongoose = require('mongoose')

const Schema = mongoose.Schema


// "id": "sarahedo",
// "name": "Sarah Edo",
// "avatarURL": "/avatar.png",
// "answers": {
//     "614f12090c52df1f9c6cbdc0": "optionOne",
//     "614f12090c52df1f9c6cbdc1": "optionTwo",
// },
// "questions": [
//     "614f12090c52df1f9c6cbdc0",
//     "614f12090c52df1f9c6cbdc2"
// ]
 

 
const userSchema = new Schema(
    {
        id:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        avatarURL:{
            type: String,
            default: "/avatar.png"
        },
        answers: Object,
        questions: [String]
    },
)

const User = mongoose.model('User', userSchema)
module.exports = User
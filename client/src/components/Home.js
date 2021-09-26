import React from 'react'
import { Tabs, Tab } from 'react-bootstrap-tabs';
import { connect } from 'react-redux'
import './css/Home.css'
import QuestionList from './QuestionList'
const Home = ({ newQuestions, answeredQuestions }) => {
    //console.log(newQuestions);
    return (
        <div className="home">
            <Tabs onSelect={(i, label) => console.log(label + ' selected')}>
                <Tab label="New Questions">
                    <QuestionList className="questions" questions={newQuestions} />
                </Tab>

                <Tab label="Answered Questions">
                    <QuestionList className="questions" questions={answeredQuestions} />
                </Tab>
            </Tabs>
        </div>
    )
}

// {
//     "id": "johndoe",
//     "name": "John Doe",
//     "avatarURL": "./avatar.png",
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

function mapStateToProps(state) {
    let authedUserID = state.authedUser
    let authedUser = state.users[authedUserID]
    let questions = Object.values(state.questions)
    let answeredQuestions = authedUser.answers

    console.log(state);

    // Filtering the questions
    let newQuestions = questions.filter(q => !answeredQuestions[q.id])


    // console.log(questions);
    // console.log(answeredQuestions);
    // console.log(newQuestions);
    answeredQuestions = Object.keys(answeredQuestions).map(q => state.questions[q])
    // console.log(answeredQuestions);
    // console.log(newQuestions);
    return {
        newQuestions,
        answeredQuestions
    }
}

export default connect(mapStateToProps)(Home)

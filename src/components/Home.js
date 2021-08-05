import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { connect } from 'react-redux'
import './css/Home.css'
import QuestionList from './QuestionList'
const Home = ({questions}) => {
    console.log(questions);
    return (
        <div>

            <Tabs defaultActiveKey="new" className="mb-3">
                <Tab eventKey="new" title="New Question">
                    <QuestionList questions={questions}/>
                </Tab>
                <Tab eventKey="answered" title="Answered Questions">
                    Old
                </Tab>
            </Tabs>

        </div>
    )
}

function mapStateToProps(state) {
    return {
      questions: []
    }
  }

export default connect(mapStateToProps)(Home)

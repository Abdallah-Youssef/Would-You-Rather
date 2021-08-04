import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import './css/Home.css'

const Home = ({questions}) => {
    return (
        <div>

            <Tabs defaultActiveKey="new" className="mb-3">
                <Tab eventKey="new" title="New Question">
                    New
                </Tab>
                <Tab eventKey="answered" title="Answered Questions">
                    Old
                </Tab>
            </Tabs>

        </div>
    )
}

export default Home

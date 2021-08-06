import React from 'react'
import { Card } from 'react-bootstrap'

function questionStatistics(question) {
    const countOne = question.optionOne.votes.length
    const countTwo = question.optionTwo.votes.length
    const sum = countOne + countTwo
    const precentageOne = (countOne / sum) * 100
    const precentageTwo = (countTwo / sum) * 100
    return {
        countOne, countTwo, precentageOne, precentageTwo
    }
}

const Results = ({ question }) => {
    let { countOne, precentageOne, countTwo, precentageTwo } = questionStatistics(question)
    return (
        <div>
            <div className="statistics">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            <span>Number of people: {countOne}</span>
                            <br></br>
                            <span>Percentage : {precentageOne}%</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            <span>Number of people: {countTwo}</span>
                            <br></br>
                            <span>Percentage : {precentageTwo}%</span>
                        </Card.Text>
                    </Card.Body>
                </Card>


            </div>

        </div>
    )

}
export default Results



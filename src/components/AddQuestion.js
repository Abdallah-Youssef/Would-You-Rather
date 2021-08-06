import React, {useState} from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import {handleAddQuestion} from '../actions/shared'

const AddQuestion = ({dispatch}) => {
    const [optionOne, setOptionOne] = useState("")
    const [optionTwo, setOptionTwo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!optionOne || !optionTwo){
            alert("Please enter both options")
            return
        }


        dispatch(handleAddQuestion(optionOne, optionTwo))
    }

    return (
        <div className="login-container">
                    <Form>
            <fieldset>
                <legend className="mb-3">Add a question</legend>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label sm={2} column>
                        Option one
                    </Form.Label>
                    <Col >
                        <Form.Control 
                        value={optionOne} 
                        onChange={(e) => setOptionOne(e.target.value)} 
                        type="text" 
                        placeholder="Enter the first option"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label sm={2} column>
                        Option Two
                    </Form.Label>
                    <Col >
                        <Form.Control value={optionTwo} onChange={(e) => setOptionTwo(e.target.value)} type="text" placeholder="Enter the second option" />
                    </Col>
                </Form.Group>




                <Form.Group as={Row} className="mb-3">
                    <Button className="submit-btn" onClick={handleSubmit}>Submit Question</Button>
                </Form.Group>


            </fieldset>

        </Form>
    
        </div>
)
}


export default connect()(AddQuestion)
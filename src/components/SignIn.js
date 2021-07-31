import React, { useState } from 'react'
import { connect } from 'react-redux'
import './SignIn.css'
import { handleSignIn } from '../actions/shared'
import { Form, Col, Row, Button } from 'react-bootstrap'
const SignIn = ({ dispatch }) => {
    const [name, setName] = useState("")
    const [imageSrc, setImageSrc] = useState("")

    const handleImageSelect = (e) => {
        setImageSrc(URL.createObjectURL(e.target.files[0]))

    }
    const handleEnter = (e) => {
        e.preventDefault()
        dispatch(handleSignIn({ name, avatarURL: imageSrc }))
    }

    return (
        <div className="login-container">


            <Form>
                <fieldset>
                    <legend className="mb-3">Sign In</legend>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label  sm={2} column>
                            User Name
                        </Form.Label>
                        <Col >
                            <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter your name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}  className="mb-3">
                        <Form.Label  sm={2} column>Avatar</Form.Label>
                        <Col>
                        <Form.Control type="file" className="file-input" onChange={handleImageSelect}/>
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button onClick={handleEnter}>Sign in</Button>
                        </Col>
                    </Form.Group>


                </fieldset>

            </Form>


            {
                imageSrc &&

                <img
                    className="image"
                    src={imageSrc}
                    alt="User avatar"

                />
            }




        </div>
    )
}


export default connect()(SignIn)
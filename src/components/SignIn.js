import React, { useState } from 'react'
import { connect } from 'react-redux'
import './css/SignIn.css'
import { userLogIn } from '../actions/users'
import {setAuthedUser} from '../actions/authedUser'
import {handleSignIn} from '../actions/shared.js'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { Avatar } from './Avatar'
import { useHistory } from 'react-router-dom'



const SignIn = ({ dispatch }) => {
    // TODO remove default value
    const [name, setName] = useState("John Doe")
    let history = useHistory()

    const [avatarURL, setAvatarURL] = useState()

    const handleImageSelect = (e) => {
        
        setAvatarURL(URL.createObjectURL(e.target.files[0]))
        // console.log(" File :: " , URL.createObjectURL(e.target.files[0]));
        // console.log(imageSrc);

    }
    const handleEnter = (e) => {
        //e.preventDefault()
        dispatch(handleSignIn({ name, avatarURL }, history))
        // console.log(avatarURL);
        // dispatch(userLogIn({name, avatarURL}))
        // dispatch(setAuthedUser(name))
        //history.push('/')
    }

    return (
        <div className="login-container">


            <Form>
                <fieldset>
                    <legend className="mb-3">Sign In</legend>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label sm={2} column>
                            User Name
                        </Form.Label>
                        <Col >
                            <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label sm={2} column>Avatar</Form.Label>
                        <Col>
                            <Form.Control type="file" className="file-input" onChange={handleImageSelect} />
                        </Col>
                        <Col>
                            {
                                avatarURL &&
                                <Avatar avatarURL={avatarURL} />

                            }
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3">
                        <Button className="submit-btn" onClick={handleEnter}>Sign in</Button>
                    </Form.Group>


                </fieldset>

            </Form>







        </div>
    )
}


export default connect()(SignIn)
import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Avatar } from './Avatar';
import './css/CustomNavBar.css'

const CustomNavBar = ({ user }) => {
    // console.log("User: ", user);
    return (
        <div className="custom-navbar">
            <Navbar expand="sm">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/leaderboard" >Leader Board</Nav.Link>
                            <Nav.Link as={Link} to="/add" >Add a Question</Nav.Link>
                            <Nav.Link as={Link} to="/signin" >Account</Nav.Link>
                        </Nav>


                        <div className="user-info">
                            <span className="user-info-name">{user.name}</span>
                            <Avatar avatarURL={user.avatarURL} style={{ marginRight: "auto" }} />

                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>)
}

function mapStateToProps(state) {
    return {
        user: state.users[state.authedUser]
    }
}

export default connect(mapStateToProps)(CustomNavBar)
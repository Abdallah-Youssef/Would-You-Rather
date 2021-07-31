import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavBar = ({ user }) => {

    return (
        <div className="custom-navbar">
            <Navbar  expand="sm">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/leaderboard" >Leader Board</Nav.Link>
                            <Nav.Link as={Link} to="/add" >Add a Question</Nav.Link>
                            <Nav.Link as={Link} to="/signin" >Account</Nav.Link>
                        </Nav>

                        
                        {
                            user && 
                            <div className="user-info">

                               {user.name}
                                <img
                                className="image"
                                src={user.avatarURL}
                                alt="User avatar"
            
                            />
                            </div>
                            
                        }
                            
                    
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
import './App.css';
import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import SignIn from './SignIn'
import {handleInitialData} from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Navbar from './CustomNavBar';
 

const App = ({authedUser, dispatch}) => {


  useEffect(() => {
    dispatch(handleInitialData())
  }, [])


  if (authedUser === null){
    return (
      <SignIn/>
    )
  }


  return (
    <div>
      <LoadingBar />
      <Navbar/>
      {authedUser}
    </div>
  )
}



function mapStateToProps(state){
  return {
    authedUser: state.authedUser,
    users: state.users
  }
}
export default connect(mapStateToProps)(App)



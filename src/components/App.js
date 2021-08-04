import './css/App.css';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import CustomNavBar from './CustomNavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import AddQuestion from './AddQuestion';
import LeaderBoard from './LeaderBoard'
import SignIn from './SignIn';
import authedUser from '../reducers/authedUser';

const App = ({ user, dispatch }) => {
  useEffect(() => {
    dispatch(handleInitialData())
    console.log();
  }, [])





  return (
    <div>

      {
        (user === null) ? <SignIn /> :
          <React.Fragment>
            <LoadingBar />


            <CustomNavBar user={user} />


            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/add">
                <AddQuestion />
              </Route>

              <Route exact path="/leaderboard">
                <LeaderBoard />
              </Route>

              <Route exact path="/signin">
                <SignIn />
              </Route>

            </Switch>
          </React.Fragment>
      }

    </div>
  )
}



function mapStateToProps(state) {
  return {
    user: state.authedUser ? state.users[authedUser] : null
  }
}
export default connect(mapStateToProps)(App)



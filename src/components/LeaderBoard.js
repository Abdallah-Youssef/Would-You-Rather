import React from 'react'
import {connect} from 'react-redux'
import Avatar from './Avatar'
import './css/LeaderBoard.css'

const score = (user) => (Object.values(user.answers).length + user.questions.length)

const LeaderBoard = ({users}) => {
    return (
        <div className="leaderboard">
            {
            users.map(u => (
                <div key={u.id} className="leaderboard-user">
                   

                    <div className="leaderboard-user-img"><Avatar  avatarURL={u.avatarURL}/></div>
                    <h1 className="leaderboard-user-name">{u.name}</h1>
                    <h3 className="score"> Score: {score(u)}</h3>
                </div>
                
            ))
            }
        </div>
    )
}

function mapStateToProps(state){
    

    let usersArr = Object.values(state.users)
    usersArr = usersArr.sort((a, b) => score(b) - score(a))
    console.log(usersArr);
    return {
        users: usersArr
    }



    
}

export default connect(mapStateToProps)(LeaderBoard)
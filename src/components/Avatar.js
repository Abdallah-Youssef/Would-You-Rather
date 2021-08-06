import React from 'react'
import {Image} from 'react-bootstrap'
const Avatar = ({avatarURL}) => {

    return (
        <Image style={{width:"100px", height:"100px", border:"1px solid blue"}} src={avatarURL} roundedCircle fluid />
    )

}

export default Avatar

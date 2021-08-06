import React from 'react'
import './css/Avatar.css'
export const Avatar = ({avatarURL}) => {
    return (
        <div className="image-cropper">
                                                    <img
                            className="avatar"
                            src={avatarURL}
                            alt="User avatar"

                        />
                        </div>
    )
}

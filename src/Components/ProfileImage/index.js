import React from 'react'
import ProfileImage from '../../Asset/profile.png'
import "./style.css"

function profileImage({ children, normalSize, className, ...props }) {
    return (
        <img src={ProfileImage}
            style={{
                fontSize: `${normalSize}`
            }}
            alt='profileImage'
            className={`profile_image_styling ${className}`}
            {...props}
        >
            {children}
        </img>
    )
}

export default profileImage
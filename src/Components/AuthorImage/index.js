import React from 'react'
import micro from '../../Asset/microsoft-5.png'
import './style.css'

function AuthorImage() {
    return (
        <img src={micro} alt='author img' className='AuthorImage_styling' />
    )
}

export default AuthorImage;
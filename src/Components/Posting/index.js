import React from 'react'
import ProfileImage from '../ProfileImage'
import Button from '../Button'
import './style.css'

function Posting() {
    return (
        <div className='Posting_Container'>
            <div className='posting_fixing_size'>
                <div className='posting_profile_post'>
                    <ProfileImage className='posting_profileimage' />
                    <input type='text' placeholder=' Write post' className='posting_input_post' />
                </div>
                <div className='posting_btn'>
                    <Button>Share</Button>
                </div>
            </div>

        </div>
    )
}

export default Posting
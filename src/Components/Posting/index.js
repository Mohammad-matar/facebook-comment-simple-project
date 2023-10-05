import React, { useState } from 'react'
import ProfileImage from '../ProfileImage'
import Button from '../Button'
import './style.css'
import instance from '../../instance';

function Posting() {
    //onchange lal input w nmarre2a bl axios body ma3 l token bl header
    const [data, setData] = useState({ text: "" });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        // console.log(data)
    }

    const handleSubmit = async () => {
        await instance.post('/posts', data)
            .then((res) => {
                setData(res)
                console.log(res)
                setData({ text: "" })
            }).catch((err) => {
                console.log(err)
            })
    }



    return (
        <div className='Posting_Container'>
            <div className='posting_fixing_size'>
                <div className='posting_profile_post'>
                    <ProfileImage className='posting_profileimage' />
                    <input
                        type='text'
                        placeholder=' Write post'
                        className='posting_input_post'
                        name='text'
                        onChange={handleChange}
                        value={data.text}
                    />
                </div>
                <div className='posting_btn'>
                    <Button
                        onClick={handleSubmit}
                    >Share</Button>
                </div>
            </div>
        </div>
    )
}

export default Posting
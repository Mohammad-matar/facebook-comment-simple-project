import React, { useState } from 'react'
import ProfileImage from '../ProfileImage'
import Button from '../Button'
import './style.css'
import instance from '../../instance';
// import { useQuery } from "@tanstack/react-query";
// import { getPosts } from '../../instance'
// import Posters from '../Poseters/index'
function Posting() {
    //onchange lal input w nmarre2a bl axios body ma3 l token bl header
    const [data, setData] = useState({ text: "" });
    // const [getTheData, setGetTheData] = useState(<Posters />)

    // const postQuerry = useQuery({
    //     queryKey: ["posts"],
    //     queryFn: getPosts,
    // });
    // if (postQuerry.status === "loading") return <h1>Loading...</h1>;
    // if (postQuerry.status === "error") {
    //     return <h1>{JSON.stringify(postQuerry.error)}</h1>;
    // }


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
                // getPosts()

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
                        onClick={
                            // () =>
                            handleSubmit
                            //  (
                            // setGetTheData(<Posters />)
                            // )
                        }
                    >Share</Button>
                    {/* {getTheData} */}
                </div>
            </div>
        </div>
    )
}

export default Posting
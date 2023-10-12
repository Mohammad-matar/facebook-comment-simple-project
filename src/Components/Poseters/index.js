import React, { useEffect, useState } from 'react'
// import AuthorImage from '../AuthorImage'
import placeholder from '../../Asset/placeholder.png'
import "./style.css"
import axios from 'axios'
import instance from '../../instance';
import moment from 'moment/moment';

function Posters() {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        await instance.get('/posts')
            .then((res) => {
                setData(res.data.data)
                console.log(res.data.data)
                setIsLoading(false)
                // getPosts()
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            {isLoading ? <h1>Loading...</h1> :
                Array.isArray(data) ? (
                    data.map((posters) => {
                        return (
                            <div className='Posters_Container' key={posters.id}>
                                <div className='posters_icon_details'>
                                    <div >
                                        {posters.user_id.image ? < img src={posters.user_id.image} alt='user_image' className='PosterImg' /> : <img src={placeholder} alt='placeholder' className='PosterImg' />}
                                    </div>

                                    <div className='poster_nameOf_TheAuthor'>
                                        <div className='author_name'>
                                            {posters.user_id.name}
                                        </div>
                                        <div className='author_time'>
                                            {moment(posters.createdAt).format("MMM Do YYYY, h:mm a")}
                                        </div>
                                    </div>
                                </div>

                                <div className='author_content'>
                                    <p>
                                        {posters.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>No data available.</p>
                )
            }
        </>

    )
}

// return (
//     <div className='Posters_Container'>

//     </div>
// )
export default Posters
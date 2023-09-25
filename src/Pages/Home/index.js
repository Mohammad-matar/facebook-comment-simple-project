import React from 'react'
import NavBar from '../../Components/NavBar'
import Posting from '../../Components/Posting'
import './style.css'
import Posters from '../../Components/Poseters'

function Home() {
    return (
        <div className='homeContainer'>
            <NavBar />
            <Posting />
            <Posters />
        </div>
    )
}

export default Home
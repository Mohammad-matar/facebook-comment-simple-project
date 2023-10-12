import React, { useState } from 'react'
import Logo from '../Logo'
import { FcSearch } from 'react-icons/fc'
import placeholder from '../../Asset/placeholder.png'
import Button from '../Button'
import './style.css'
import { useAuth } from '../../auth'


const NavBar = () => {
    const { user, logout } = useAuth()
    // const [user, setUser] = useState(null)

    const handleLogout = () => {
        // localStorage.removeItem('token');https://cloud.mongodb.com/v2/6515560c8b92261029f28f06#/clusters
        // setUser(null)
        // window.location.reload();
        logout()
    }


    return (
        <div className='navBar_Container'>
            <div className='navbar_spacing'>
                <div className='navbar_leftSide'>
                    <Logo />
                    <div className='navbar_input_searchbar'>
                        <input type='text' className='search_input' placeholder='Search...' />
                        <FcSearch className='FcSearch_loupe' />
                    </div>
                </div>

                <div className='navbar_rightSide'>
                    <div>
                        {user?.image ? < img src={user?.image} alt='user_image' className='PosterImg' /> : <img src={placeholder} alt='placeholder' className='PosterImg' />}                    </div>
                    <div>
                        <p> {user?.name} </p>
                    </div>
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
import React from 'react'
import Logo from '../Logo'
import { FcSearch } from 'react-icons/fc'
import ProfileImage from '../ProfileImage'
import Button from '../Button'
import './style.css'


const NavBar = () => {
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
                        <ProfileImage />
                    </div>
                    <div>
                        <p> Name </p>
                    </div>
                    <Button>Logout</Button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
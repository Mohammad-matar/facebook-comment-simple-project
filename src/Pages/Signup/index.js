import React from 'react'
import Button from '../../Components/Button'
import theme from '../../theme.json'

function Signup() {
    return (
        <div className='longin_Container'>
            <div className='login_content'>
                <div className='longin_left_side'>
                    <h1> facebook</h1>
                    <p>Connect with friends and the world around you on Facebook.</p>
                </div>

                <div>
                    <div className='login_right_side'>
                        <form className='login_right_side_form'>
                            <div className='login_input'>
                                <input type='text' placeholder='Name' />
                                <input type='email' placeholder='Email' />
                                <input type='password' placeholder='Password' />
                            </div>
                            <div className='login_btn_container'>
                                <Button
                                    startBgColor={theme.secondaryColor}
                                    className='login_btn'
                                >
                                    Login
                                </Button>

                                <Button
                                    startBgColor={theme.addButton}
                                    startColor={theme.white}
                                >
                                    Already have account</Button>
                            </div>
                        </form>
                    </div>

                    <div className='login_create_apage'>
                        <p> <span>Create a Page</span> for a celebrity, brand or business.</p>
                    </div>
                </div>
            </div>

        </div>)
}

export default Signup
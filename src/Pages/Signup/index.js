import React, { useState } from 'react'
import Button from '../../Components/Button'
import theme from '../../theme.json'

function Signup() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Kousa")
    }

    return (
        <div className='longin_Container'>
            <div className='login_content'>
                <div className='longin_left_side'>
                    <h1> facebook</h1>
                    <p>Connect with friends and the world around you on Facebook.</p>
                </div>

                <div>
                    <div className='login_right_side'>
                        <form className='login_right_side_form'
                            onSubmit={handleSubmit}
                        >
                            <div className='login_input'>
                                <input
                                    name='name'
                                    type='text'
                                    placeholder='Name'
                                    // value={data.name}
                                    onChange={handleChange}
                                    required

                                />
                                <input
                                    name='email'
                                    type='email'
                                    placeholder='Email'
                                    // value={data.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    name='password'
                                    type='password'
                                    placeholder='Password'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div
                                className='login_btn_container'
                            >
                                <Button
                                    startBgColor={theme.secondaryColor}
                                    className='login_btn'
                                    type="submit"
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
import React, { useState } from 'react'
import Button from '../../Components/Button'
import theme from '../../theme.json'
import axios from 'axios';
import { useAuth } from '../../auth'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const auth = useAuth()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        // console.log(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("Kousa")
    }

    const navigationToLogin = () => {
        navigate('/login');
    }

    const handleSignup = (e) => {
        e.preventDefault()
        if (!data.name) {
            alert("Name is required")
        } else if (!data.email) {
            alert("Email is required")
        } else if (!data.password) {
            alert("Password is required")

        } else {
            axios.post("https://comment-task-api.onrender.com/users/signup", data)
                .then((res) => {
                    // console.log(res.data.token)
                    auth.signup(res.data.token)
                    // localStorage.setItem("token", res.data.token)
                    alert("SignUp Successfuly")
                    navigate('/');
                })
                .catch(error => {
                    console.log(error)
                    alert(error.message)

                })
        }
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
                                    onClick={handleSignup}
                                >
                                    Sign Up
                                </Button>

                                <Button
                                    startBgColor={theme.addButton}
                                    startColor={theme.white}
                                    onClick={navigationToLogin}
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
import React, { useState } from 'react'
import Button from '../../Components/Button'
import theme from '../../theme.json'
import "./style.css"
import axios from 'axios';
import { useAuth } from '../../auth';
import { useNavigate } from 'react-router-dom';

function Login() {
    const auth = useAuth();
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        // console.log(data)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("batata")
    }

    const navigationToSignUp = () => {
        navigate('/signup')
    }

    const handleLogin = (e) => {
        e.preventDefault()
        if (!data.email) {
            alert('Eamil is Required')
        } else if (!data.password) {
            alert('Password is Required')
        } else {
            axios.post("https://comment-task-api.onrender.com/users/login", data)
                .then((res) => {
                    console.log(res);
                    // console.log("dasda", res.data.token)
                    auth.login(res.data.token)
                    navigate('/')
                })
                .catch(error => {
                    alert(error.message)
                    console.log(error)
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
                        <form className='login_right_side_form' onSubmit={handleSubmit}>
                            <div className='login_input'>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='login_btn_container'>
                                <Button
                                    startBgColor={theme.secondaryColor}
                                    className='login_btn'
                                    type="submit"
                                    onClick={handleLogin}
                                >
                                    Login
                                </Button>
                                <Button
                                    startBgColor={theme.white}
                                    startColor={theme.secondaryColor}
                                    className='login_btn_forget_password'
                                >
                                    Forget Password?
                                </Button>
                                <Button
                                    startBgColor={theme.addButton}
                                    startColor={theme.white}
                                    onClick={navigationToSignUp}
                                >
                                    Create new account</Button>
                            </div>
                        </form>
                    </div>

                    <div className='login_create_apage'>
                        <p> <span>Create a Page</span> for a celebrity, brand or business.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
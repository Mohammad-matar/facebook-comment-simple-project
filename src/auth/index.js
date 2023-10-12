import { createContext, useContext, useEffect, useState } from "react";
import instance from '../instance';
import axios from "axios";

const AuthContext = createContext(null)


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('token') ? true : false
    )

    useEffect(() => {
        const checkToken = async () => {
            if (authorizationToken()) {
                await verifyToken(authorizationToken())
            }
        }
        checkToken();
    }, [isLoggedIn])


    const verifyToken = async (token) => {
        await axios
            .get(`https://comment-task-api.onrender.com/users/info`, { headers: { 'Authorization': `Bearer ${token}` } })
            .then((res) => {
                console.log(res.data.data)
                setUser(res.data.data);
            })
            .catch((err) => console.log(err));
    };

    const authorizationToken = () => {
        var token = localStorage.getItem("token");
        if (token) {
            return token
        } else return null
    };

    const login = async (token) => {
        console.log("login")
        await localStorage.setItem("token", token);
        setIsLoggedIn(true);
        await verifyToken(token);
    }
    const signup = async (token) => {
        await localStorage.setItem("token", token);
        setIsLoggedIn(true);
        await verifyToken(token);
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("token")
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, signup, isLoggedIn, authorizationToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
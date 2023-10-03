import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('token') ? true : false
    )

    const authorizationToken = () => {
        var token = localStorage.getItem("token");
        if (token) {
            return token
        } else return null
    };

    const login = (token) => {
        localStorage.setItem("token", token);
        setIsLoggedIn(true)
    }
    const signup = (token) => {
        localStorage.setItem("token", token);
        setIsLoggedIn(true)
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
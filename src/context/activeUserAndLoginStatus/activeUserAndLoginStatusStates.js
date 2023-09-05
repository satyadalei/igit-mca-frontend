"use client"
import { useEffect, useState } from "react"
import activeUserAndLoginStatusContext from "./activeUserAndLoginStatusContext"


const ActiveUserAndLoginStatusStates = (props) => {

    // -------- STATES ----------
    const [activeUser, setActiveUser] = useState(null);
    const [loginStatus, setLoginStatus] = useState(false);
    const [token, setToken] = useState(null)
    
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Access localStorage here and store it in state
            const tokenString = localStorage.getItem('token');
            setToken(tokenString);
        }
    }, [])

    // ---------- FETCH ACTIVE USER -----------
    const fetchActiveUser = async () => {
        if (!token) {
            setLoginStatus(false)
        } else {
            //fetch user & login status
            const url = `${baseUrl}/user/fetchUser`;
            const getUser = fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "token": token
                }
            })
            const response = await getUser.json();
            if (response.success) {
                setLoginStatus(true);
                setActiveUser(response.user);
            } else {
                setLoginStatus(false);
                setActiveUser(null);
            }
        }
    }

    // -------- LOGOUT USER -----------
    const logOutUser = () => {
        localStorage.removeItem("token");
        setLoginStatus(false);
        setActiveUser(null);
    }
    return (
        <activeUserAndLoginStatusContext.Provider value={{
            activeUser, loginStatus,
            setActiveUser,
            setLoginStatus,
            fetchActiveUser,
            logOutUser
        }} >
            {props.children}
        </activeUserAndLoginStatusContext.Provider>
    )
}

export default ActiveUserAndLoginStatusStates;
"use client"
import { useEffect, useState } from "react"
import activeUserAndLoginStatusContext from "./activeUserAndLoginStatusContext"


const ActiveUserAndLoginStatusStates = (props) => {

    // -------- STATES ----------
    const [activeUser, setActiveUser] = useState(null);
    const [loginStatus, setLoginStatus] = useState(null);
     

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    useEffect(() => {
        if (typeof window != 'undefined') {
            // Access localStorage here and store it in state
            const isLogIn = localStorage.getItem("isLogIn");
            setLoginStatus(isLogIn);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // ---------- FETCH ACTIVE USER -----------
    const fetchActiveUser = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setLoginStatus(false)
            localStorage.removeItem("isLogIn");
        } else {
            //fetch user & login status
            const url = `${baseUrl}/api/user/fetchUser`;
            const getUser = await fetch(url, {
                method: "GET",
                headers: {
                    "token": token
                }
            })
            const response = await getUser.json();
            if (response.success) {
                setLoginStatus(true);
                setActiveUser(response.user);
                localStorage.setItem("isLogIn",true)
            } else {
                setLoginStatus(false);
                setActiveUser(null);
                localStorage.clear();
            }
        }
    }
    useEffect(()=>{
        fetchActiveUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[loginStatus])
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

module.exports = ActiveUserAndLoginStatusStates;
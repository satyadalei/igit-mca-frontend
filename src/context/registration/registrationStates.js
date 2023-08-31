"use client"
import { useContext, useState } from "react"
import { useEffect } from "react"
import { redirect, useRouter } from 'next/navigation'
import registrationContext from "./registrationContext"
import loadingAndAlertContext from "../loadingAndAlert/loadingAndAlertContext"

import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../../../firebase/firebase"

const RegistrationStates = (props) => {

    const {setLoading,setAlert} = useContext(loadingAndAlertContext);
    const [registeringUser, setRegisteringUser] = useState();
    const [user, setUser] = useState(null);
    const updateBatch = (batch) => {
        // console.log(batch);
        setRegisteringUser(batch);
    }

    const router = useRouter()
    // ------- This function is for NEW user who are willing to register :: SIGN UP
    const googleSignUp = () => {
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
            .then((result) => {
                // result is the source data from firebase
                // user loged in then redirect to registration form
                setUser(result.user);
                router.push("/registration/registrationform", undefined, { shallow: true });
            })
            .catch((error) => {
                console.log("Caught error Popup closed");
            });
    }

    const logOut = () => {
        signOut(auth)
    }

    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         setUser(currentUser);
    //     })
    //     return () => unSubscribe()
    // }, [])


    const baseUrl =  process.env.NEXT_PUBLIC_BASE_URL ;
    const registerNewUser = async (userDetails)=>{
        const url  = `${baseUrl}/api/user/createUser`
        const register = await fetch(url, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body : JSON.stringify(userDetails), // sending data to server
        })
        const response = await register.json();
        console.log(response);
        if (response.success) {
            // user successfully created
            setAlert({
                alert : true,
                alertMessage : "Account created successfully",
                alertType : "success"
            })
            // save token 
            localStorage.setItem("token", response.token)
            // redirect to home page after 3 sec
            setTimeout(()=>{
                router.push("/")
                setLoading(false)
            },3000);
            return {resetDetails : true}
        }else{
            setLoading(false);
            setAlert({
                alert : true,
                alertMessage : response.message,
                alertType : "error"
            })
        }
    }

    return (
        <registrationContext.Provider value={{ registeringUser, setRegisteringUser, updateBatch, user, googleSignUp, logOut, registerNewUser }} >
            {props.children}
        </registrationContext.Provider>
    )
}


export default RegistrationStates;
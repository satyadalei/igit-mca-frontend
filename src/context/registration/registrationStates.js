"use client"
import { useState } from "react"
import registrationContext from "./registrationContext"

import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../../../firebase/firebase"
import { useEffect } from "react"
import { useRouter } from 'next/navigation'

const RegistrationStates = (props) => {
    const [registeringUser, setRegisteringUser] = useState(null);
    const [user, setUser] = useState(null);
    const updateBatch = (batch) => {
        // console.log(batch);
        setRegisteringUser(batch);
    }

    const router = useRouter()
    // ------- This function is for NEW user who are willing to regsiter :: SIGN UP
    const googleSignUp = () => {
        const provider = new GoogleAuthProvider()
     
        signInWithPopup(auth, provider)
            .then((result) => {
                // result is the source data from firebase
                console.log("Logged In", result);
                // user loged in then redirect to registration form
                router.push("/registration/registrationform")
            })
            .catch((error) => {
                console.log("Caught error Popup closed");
            });
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => unSubscribe()
    }, [])

    return (
        <registrationContext.Provider value={{ registeringUser, setRegisteringUser, updateBatch, user, googleSignUp, logOut }} >
            {props.children}
        </registrationContext.Provider>
    )
}


export default RegistrationStates;
"use client"
import { useContext, useState } from "react"
import { useEffect } from "react"
import { redirect, useRouter } from 'next/navigation'
import registrationContext from "./registrationContext"
import loadingAndAlertContext from "../loadingAndAlert/loadingAndAlertContext"

import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../../../firebase/firebase"
import { json } from "react-router-dom"

const RegistrationStates = (props) => {

    const { setLoading, setAlert } = useContext(loadingAndAlertContext);
    const [registeringUser, setRegisteringUser] = useState(null);
    // const [registeringUser, setRegisteringUser] = useState(41); // for test only
    const [user, setUser] = useState(null);
    // const [user, setUser] = useState({ email: "satya@gmail.com" }); // for test only
    const updateBatch = (batch) => {
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
                console.log("Caught error Popup closed" + error);
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


    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // ------- registering new User starts------
    const registerNewUser = async (userDetails) => {
        //console.log(userDetails);
        const url = `${baseUrl}/api/user/createUser`;
        const imageFile = userDetails.profilePic;
        //console.log(imageFile);
        const {
            batch, email, password, regNum, rollNum, fName, lName, homeDist, mobile, fieldOfInterest, gradCourse, tag, githubLink, linkedInLink
        } = userDetails;
        console.log(batch);
        const textData = {
            batch, email, password, regNum, rollNum, fName, lName, homeDist, mobile, fieldOfInterest, gradCourse, tag, githubLink, linkedInLink
        }
         //console.log(textData);
        //console.log(userDetails);
        let formData = new FormData;
        formData.append('textData', JSON.stringify(textData));
        formData.append('imageFile', imageFile);
        console.log(Object.fromEntries(formData));
        console.log(url);
        try {
            console.log(url);
            const register = await fetch(url, {
                method: "POST",
                // headers: {
                //     'Content-Type': 'multipart/form-data',
                // },
                body: formData
            })
            const response = await register.json();
            console.log(response);
            if (response.success) {
                // user successfully created
                setAlert({
                    alert: true,
                    alertMessage: "Account created successfully",
                    alertType: "success"
                })
                // save token 
                localStorage.setItem("token", response.token)
                // redirect to home page after 3 sec
                setTimeout(() => {
                    router.push("/")
                    setLoading(false)
                }, 3000);
                return { resetDetails: true }
            } else {
                setLoading(false);
                setAlert({
                    alert: true,
                    alertMessage: response.message,
                    alertType: "error"
                })
            }
        } catch (error) {
            setLoading(false);
            setAlert({
                alert: true,
                alertMessage: "Some unexpected error occurred",
                alertType: "error"
            })
        }
        //try catch ends
    }
    // ------- registering new User ends------

    return (
        <registrationContext.Provider value={{ registeringUser, setRegisteringUser, updateBatch, user, setUser, googleSignUp, logOut, registerNewUser }} >
            {props.children}
        </registrationContext.Provider>
    )
}


export default RegistrationStates;
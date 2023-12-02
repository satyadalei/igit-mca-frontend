"use client"
import { useContext, useState } from "react"
import { useEffect } from "react"
import { redirect, useRouter } from 'next/navigation'
import registrationContext from "./registrationContext"
import loadingAndAlertContext from "../loadingAndAlert/loadingAndAlertContext"

import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../../../firebase/firebase"
import ActiveUserAndLoginStatusContext from "../activeUserAndLoginStatus/activeUserAndLoginStatusContext"

const RegistrationStates = (props) => {

    // ---- context API ----
    const { setLoading, startLoading, stopLoading, setAlert, createAlert } = useContext(loadingAndAlertContext);
    const { setActiveUser, setLoginStatus } = useContext(ActiveUserAndLoginStatusContext);

    const [registeringUser, setRegisteringUser] = useState(null);
    const [user, setUser] = useState(null);

    // const [registeringUser, setRegisteringUser] = useState(41); // for test only
    // const [user, setUser] = useState({ email: "satya123@gmail.com" }); // for test only

    const updateBatch = (batch) => {
        setRegisteringUser(batch);
    }

    const router = useRouter()
    // ------- This function is for NEW user who are willing to register :: SIGN UP
    const googleSignUp = () => {
        const provider = new GoogleAuthProvider();
        startLoading();
        signInWithPopup(auth, provider)
            .then((result) => {
                // result is the source data from firebase
                // user loged in then redirect to registration form
                setUser(result.user);
                router.push("/registration/registrationform", undefined, { shallow: true });
                stopLoading();
            })
            .catch((error) => {
                console.log("Caught error Popup closed" + error);
                stopLoading();
                createAlert("error", "Some error occurred try after some time")
            });
    }


    // ----- SIGN IN VIA GOOGLE ------
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        try {
            signInWithPopup(auth, provider)
                .then(async (result) => {
                    // token of user to be sent to server
                    setLoading(true)
                    const accessToken = result.user.stsTokenManager.accessToken;
                    const user = result.user;
                    //---- call API to server --
                    const url = `${baseUrl}/api/user/loginViaGoogle`;
                    const userDetails = {
                        uid: accessToken,
                        email: user.email,
                    }
                    const loginUser = await fetch(url, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(userDetails)
                    })
                    const response = await loginUser.json();
                    if (response.success) {
                        setAlert({
                            alert: true,
                            alertMessage: response.message,
                            alertType: "success"
                        })
                        // save token & set user
                        localStorage.setItem("token", response.token)
                        localStorage.setItem("isLogIn", true)
                        setActiveUser(response.user);
                        setLoginStatus(true)
                        // redirect home page
                        setTimeout(() => {
                            setLoading(false)
                            router.push("/")
                        }, 3000)
                        return { resetDetails: true }
                    } else {
                        setLoading(false)
                        if (response.message === "User with same email already exists. Please login!") {
                            setAlert({
                                alert: true,
                                alertMessage: response.message,
                                alertType: "error"
                            })
                            setTimeout(() => {
                                return { resetDetails: true }
                            }, 3000)
                        } else {
                            setAlert({
                                alert: true,
                                alertMessage: response.message,
                                alertType: "error"
                            })
                            return { resetDetails: false }
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false)
                    setAlert({
                        alert: true,
                        alertMessage: "Some error occurred. Try after some time!",
                        alertType: "error"
                    })
                    return { resetDetails: false }
                })
        } catch (error) {
            console.log(error);
            setLoading(false)
            setAlert({
                alert: true,
                alertMessage: "Some error occurred. Try after some time!",
                alertType: "error"
            })
            return { resetDetails: false }
        }
    }

    // -------- LOGIN USER MANUALLY -------------
    const signInManually = async (loginDetails) => {
        const url = `${baseUrl}/api/user/loginManually`;
        setLoading(true)
        // call api 
        try {
            const loginUser = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginDetails)
            })
            const response = await loginUser.json();
            if (response.success) {
                setAlert({
                    alert: true,
                    alertMessage: response.message,
                    alertType: "success"
                })

                // save token & set user
                localStorage.setItem("token", response.token)
                localStorage.setItem("isLogIn", true)
                setActiveUser(response.user);
                setLoginStatus(true)

                // redirect home page
                setTimeout(() => {
                    setLoading(false)
                    router.push("/")
                }, 3000)
                return { resetDetails: true }
            } else {
                setLoading(false)
                setAlert({
                    alert: true,
                    alertMessage: response.message,
                    alertType: "error"
                })
                return { resetDetails: false }
            }
        } catch (error) {
            stopLoading()
            console.log("some error occurred try after some time");
            createAlert("error", "Some error ocurred. Try after some time.")
        }
    }


    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         setUser(currentUser);
    //     })
    //     return () => unSubscribe()
    // }, [])


    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // ------- REGISTERING NEW USER STARTS ------
    const registerNewUser = async (userDetails) => {
        const url = `${baseUrl}/api/user/createUser`;
        const {
            batch, email, password, fullName, homeDist
        } = userDetails;
        const textData = {
            batch, email, password, fullName, homeDist
        }
        let formData = new FormData;
        formData.append('textData', JSON.stringify(textData));
        try {
            const register = await fetch(url, {
                method: "POST",
                // headers: {
                //     'Content-Type': 'multipart/form-data',
                // },
                body: formData
            })
            const response = await register.json();
            setLoading(false);
            if (response.success) {
                // user successfully created
                setAlert({
                    alert: true,
                    alertMessage: response.message + " 👨‍💻 Update your profile details to get verified.",
                    alertType: "success"
                })
                // save token & set user
                localStorage.setItem("token", response.token)
                localStorage.setItem("isLogIn", true)
                setActiveUser(response.user);
                setLoginStatus(true)
                // set registration details to initial value
                // redirect to home page after 3 sec
                router.push("/profile", undefined, { shallow: true })
                setRegisteringUser(null)
                setUser(null)
                // this is for detecting whether to reset form data or not
                return { resetDetails: true }
            } else {
                setAlert({
                    alert: true,
                    alertMessage: response.message,
                    alertType: "error"
                })
                return { resetDetails: true }
            }
        } catch (error) {
            setLoading(false);
            setAlert({
                alert: true,
                alertMessage: "Some unexpected error occurred! Contact site admin or try after some time.",
                alertType: "error"
            });
            return { resetDetails: false }
        }
        //try catch ends
    }
    // -------REGISTERING NEW USER ENDS ------

    return (
        <registrationContext.Provider value={{ registeringUser, setRegisteringUser, updateBatch, user, setUser, googleSignUp, googleSignIn, signInManually, registerNewUser }} >
            {props.children}
        </registrationContext.Provider>
    )
}


export default RegistrationStates;
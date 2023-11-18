"use client"
import { message } from "@/data/fakeUserData"
import loadingAndAlertContext from "./loadingAndAlertContext"
import { useState } from "react"

const LoadingAndAlertStates = (props)=>{
     const [loading, setLoading] = useState(false)
     const [alert, setAlert] = useState({
        alert : false ,
        alertType : "",
        alertMessage : "",
     })
     const stopLoading = ()=>{
        setLoading(false)
     }
    //  This function is a substitution to set Loading. Here we are not required to pass any tru or false value
     const startLoading = ()=>{
        setLoading(true);
     }
    //  custom alert to pass only value; This is an short form substitution to existing setAlert function above , main purpose of creating this function is to minimize code redundancy
     const createAlert = (alertType, alertMessage)=>{
        setAlert({
            alert:true,
            alertType,
            alertMessage
        })
     }

    return (
        <loadingAndAlertContext.Provider 
        value={{setLoading,setAlert,startLoading,createAlert,stopLoading,loading,alert}}
         >
           {props.children}
        </loadingAndAlertContext.Provider>
    )
}

export default LoadingAndAlertStates;
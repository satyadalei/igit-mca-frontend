"use client"
import loadingAndAlertContext from "./loadingAndAlertContext"
import { useState } from "react"

const LoadingAndAlertStates = (props)=>{
     const [loading, setLoading] = useState(false)
     const [alert, setAlert] = useState({
        alert : false ,
        alertType : "",
        alertMessage : "",
     })

    return (
        <loadingAndAlertContext.Provider 
        value={{setLoading,setAlert,loading,alert}}
         >
           {props.children}
        </loadingAndAlertContext.Provider>
    )
}

export default LoadingAndAlertStates;
"use client"
import React, { useContext, useEffect } from 'react'
import loadingAndAlertContext from '@/context/loadingAndAlert/loadingAndAlertContext'
import CloseIcon from '@mui/icons-material/Close';
const Alert = () => {
  const { alert, setAlert } = useContext(loadingAndAlertContext);
  
  const hideAlertBox = () => {
    setAlert({
      alert: false,
      alertType: "",
      alertMessage: "",
    })
  }
  useEffect(() => {
    let alertTimeout; // Variable to store the timeout identifier
    // if alert exists 
    if (alert.alert) {
      alertTimeout = setTimeout(() => {
        hideAlertBox();
      }, 5000)
    }else{
      clearTimeout(alertTimeout);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert.alert])

  return (
    <div id='alert_container' className='alert_container'
      style={{
        backgroundColor:
          (alert.alertType === "warning" || alert.alertType === "") ? "orange" :
            (alert.alertType === "error") ? "red" :
              (alert.alertType === "success") && "green"
      }} >
      <p style={{color:"white"}} >{alert.alertMessage}</p>
      <CloseIcon onClick={hideAlertBox} />
    </div>
  )
}

export default Alert
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
    if (alert.alert) {
      setTimeout(() => {
        hideAlertBox();
      }, 6000)
    }
  }, [alert.alert])

  return (
    <>
      {alert.alert &&
        <div id='alert_container'  className='alert_container'
          style={{
            backgroundColor:
              (alert.alertType === "warning" || alert.alertType === "") ? "orange" :
                (alert.alertType === "error") ? "red" :
                  (alert.alertType === "success") && "green"
          }} >
          <p style={{ color: "white" }} >{alert.alertMessage}</p>
          <CloseIcon style={{ cursor: "pointer", color:"white" }} onClick={hideAlertBox} />
        </div>
      }
    </>
  )
}

export default Alert
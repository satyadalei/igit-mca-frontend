"use client"
import React, { useContext, useState } from 'react'
import styles from "./page.module.css"
import { Button, TextField } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import Loading from "../../components/common/Loading"
import Alert from "../../components/common/Alert"
import loadingAndAlertContext from "@/context/loadingAndAlert/loadingAndAlertContext";
import RegistrationContext from "@/context/registration/registrationContext";
import validate from "./validate"
import GeneralButton from '@/components/common/GeneralButton'





const Login = () => {

  // ----- CONTEXT APIS -------
  const { setLoading, setAlert, loading, alert } = useContext(loadingAndAlertContext);
  const {googleSignIn,signInManually} = useContext(RegistrationContext)
  //---- STATES -----
  const [loginDetails, setloginDetails] = useState({
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    setloginDetails((prev) => {
      return {
        ...prev, [e.target.name]: e.target.value
      }
    })
  }
  const handleLoginManually = async ()=>{
    const isError = validate(loginDetails);
    if (isError.error) {
      setAlert({
        alert : true,
        alertType : "warning",
        alertMessage : isError.message
      })
    }else{
      // call api to authenticate user
      const isSigned = await signInManually(loginDetails);
      if (isSigned.resetDetails) {
        setloginDetails(loginDetails)
      }
    }
  }

  const handleLoginUsingGoogle = ()=>{
    // 
    const isSignedIn = googleSignIn();
    
  }
  return (
    <>
      <section className='page_section' >

        {/* ---- <Alert/> -----  */}
        {alert.alert && <Alert />}

        {/* ---- Loading -----  */}
        {loading && <Loading />}
        <div className={styles.login_main_container} >

          <div className={styles.login_box_center}>
            <h1 className="text-3xl border-b-2 pb-3 mb-5 text-sky-500 font-bold text-center" >Login</h1>

            {/* google signin box */}
            <div className={styles.google_signin_box} >
              <Button style={{ backgroundColor: "#088dec", color: "white" }} 
              className={styles.google_sign_or_login_button} 
              onClick={handleLoginUsingGoogle}
              >
                <Image style={{ marginRight: "0.5rem" }} className={styles.signin_logo} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAjVBMVEVHcEz////9/f38/Pz////4+fn9/f38/P3v8PH19vb///////87q1n8wAnrSz5HifXqOijsUUMfpUYvfvQwqVhDhvRnm/bg7ur74eDykIrznpj609DI5c/uZUj/78rG2PyzzPKJyJj5zMn/++37xSf81XhqsFCa0KV1v4f0kCGvtTCCyJyXt/hyofZDj9Yia4J9AAAAC3RSTlMAojhxnKGw/RkrfoV/rhcAAAFQSURBVDiNlVPZYoMgENQYRCIgclRNNKlpm/T+/88rl3jmofPEMuPu7LpE0X+wO8RpGh9222wW5wFxtuYntJUsaATzBSCaFV/SBhMryF9dm46xrjn5cMzh8p9KRsuypJSVTgLn/o6stKAa7Gqv9r6/kadMQ/NHX8R1u7f5Dc+aGsK6CbxPYY+dLk9rd12PnYQWz6SjbEJMW03M4Y2Qj2ZjFslg4ZUQcrZXTwMug4nUHDRPXqxAFBpKKfFsovSBwGiCYFFCGKiiEKHEYPLza/T2owpRDSaRa/MmeTXwla4j7AmFQd0kxtIrYKEK9R0G5Uy0HGPM+wrC6i41L+A4avez7kYhuYbO9ess+p8VARv0RuEgue0xB/OFaaX5GEvJsTMTFsYX0ZJ3XQP3rQ8nu7+5tLO1ztZrv3w7YM6DaIUMhCwQbDw9+z4SkKYgQdvsA/wBrYgleUhdXncAAAAASUVORK5CYII="} alt='google icon' width={30} height={30} /> Google
              </Button>
            </div>

            <div>
              <h3 className={styles.or_devider} >Or</h3>
            </div>

            {/* manual email password login box */}
            <div className={styles.manual_login_box} >

              {/* ---EMAIL---- */}
              <TextField
                style={{ margin: "0 0 0.5rem 0" }}
                name='email'
                required
                fullWidth
                // id="outlined-basic"
                label="Email"
                onChange={handleChange}
                value={loginDetails.email}
                variant="filled"
                autoComplete='off'
              />

              {/* ---PASSWORD---- */}
              <TextField
                style={{ margin: "0.5rem 0 0.5rem 0" }}
                name='password'
                label="Password"
                type="password"
                required
                fullWidth
                // id="outlined-basic"
                value={loginDetails.password}
                onChange={handleChange}
                variant="filled"
              />

              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "0.5rem" }} >
                <GeneralButton variant="contained" onClick={handleLoginManually} >
                  Login
                </GeneralButton>
              </div>
              <p style={{
                marginTop: "1rem",
                textAlign: "center"
              }} >New user?  &nbsp;
                <Link
                  style={{
                    textDecoration: "none", color: "#088dec",
                  }}
                  href={"/registration"} >
                  Register now!
                </Link> </p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Login
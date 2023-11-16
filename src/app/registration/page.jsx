"use client"
import { Button } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import RegistrationContext from "@/context/registration/registrationContext";
import styles from "./register.module.css"
import Image from 'next/image';
import Loading from '@/components/common/Loading';
import loadingAndAlertContext from '@/context/loadingAndAlert/loadingAndAlertContext';
import Link from 'next/link';
import activeUserAndLoginStatus from '@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext';
import { useRouter } from 'next/navigation';



const RegisterVia = () => {

  const { googleSignUp } = useContext(RegistrationContext);
  const { startLoading } = useContext(loadingAndAlertContext);
  const {loginStatus} = useContext(activeUserAndLoginStatus);


  const router = useRouter(); 
  const handleSignUp = async () => {
    try {
      await googleSignUp();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (loginStatus === true) {
      router.push("/")
    }
  }, [loginStatus])
  

  return (
    <section className='page_section' >
      <div className={styles.via_google_box} >
        <h1 className="text-3xl border-b-2 pb-3 mb-5 text-gray-800 font-bold text-center" >Register via</h1>
        <Button style={{ backgroundColor: "#088dec", color: "white" }} className={styles.google_sign_or_login_button} onClick={handleSignUp} >
          <Image style={{ marginRight: "1rem" }} className={styles.signin_logo} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAjVBMVEVHcEz////9/f38/Pz////4+fn9/f38/P3v8PH19vb///////87q1n8wAnrSz5HifXqOijsUUMfpUYvfvQwqVhDhvRnm/bg7ur74eDykIrznpj609DI5c/uZUj/78rG2PyzzPKJyJj5zMn/++37xSf81XhqsFCa0KV1v4f0kCGvtTCCyJyXt/hyofZDj9Yia4J9AAAAC3RSTlMAojhxnKGw/RkrfoV/rhcAAAFQSURBVDiNlVPZYoMgENQYRCIgclRNNKlpm/T+/88rl3jmofPEMuPu7LpE0X+wO8RpGh9222wW5wFxtuYntJUsaATzBSCaFV/SBhMryF9dm46xrjn5cMzh8p9KRsuypJSVTgLn/o6stKAa7Gqv9r6/kadMQ/NHX8R1u7f5Dc+aGsK6CbxPYY+dLk9rd12PnYQWz6SjbEJMW03M4Y2Qj2ZjFslg4ZUQcrZXTwMug4nUHDRPXqxAFBpKKfFsovSBwGiCYFFCGKiiEKHEYPLza/T2owpRDSaRa/MmeTXwla4j7AmFQd0kxtIrYKEK9R0G5Uy0HGPM+wrC6i41L+A4avez7kYhuYbO9ess+p8VARv0RuEgue0xB/OFaaX5GEvJsTMTFsYX0ZJ3XQP3rQ8nu7+5tLO1ztZrv3w7YM6DaIUMhCwQbDw9+z4SkKYgQdvsA/wBrYgleUhdXncAAAAASUVORK5CYII="} alt='google icon' width={30} height={30} /> Google
        </Button>
      </div>
      <p className='text-center text-xs mt-5 mb-5 text-gray-300' >Click on the google icon to register via google</p>


      <p className='text-center' >
        Already registered? <Link className='text-sky-500' href={"/login"} >Login here!</Link>
      </p>

    </section>
  )
}

export default RegisterVia
"use client"
import { Button } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import RegistrationContext from "@/context/registration/registrationContext";
import { useRouter } from 'next/navigation'
import styles from "../register.module.css"
import Image from 'next/image';
import Loading from "../../../components/common/Loading"

const RegisterVia = () => {
    const registrationcontext = useContext(RegistrationContext);
    const {registeringUser, googleSignUp, user} = registrationcontext;
    const router = useRouter()
   useEffect(()=>{
    if (registeringUser === null ) {
        router.push('/registration',undefined, { shallow: true })
    }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[user])     
    const handleSignUp = async ()=>{
        try {
            await googleSignUp();
        } catch (error) {
            console.log(error);
        }
    
    }
  return (
    <>
      <section className='page_section' >

         {registeringUser !=  null && user === null  ?
         <>
         <div className={styles.via_google_box} >
            <h1 className={styles.register_via_heading} >Register via</h1>
            <Button style={{backgroundColor:"#088dec",color:"white"}} className={styles.google_sign_or_login_button} onClick={handleSignUp} >
              <Image style={{marginRight:"1rem"}} className={styles.signin_logo} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAjVBMVEVHcEz////9/f38/Pz////4+fn9/f38/P3v8PH19vb///////87q1n8wAnrSz5HifXqOijsUUMfpUYvfvQwqVhDhvRnm/bg7ur74eDykIrznpj609DI5c/uZUj/78rG2PyzzPKJyJj5zMn/++37xSf81XhqsFCa0KV1v4f0kCGvtTCCyJyXt/hyofZDj9Yia4J9AAAAC3RSTlMAojhxnKGw/RkrfoV/rhcAAAFQSURBVDiNlVPZYoMgENQYRCIgclRNNKlpm/T+/88rl3jmofPEMuPu7LpE0X+wO8RpGh9222wW5wFxtuYntJUsaATzBSCaFV/SBhMryF9dm46xrjn5cMzh8p9KRsuypJSVTgLn/o6stKAa7Gqv9r6/kadMQ/NHX8R1u7f5Dc+aGsK6CbxPYY+dLk9rd12PnYQWz6SjbEJMW03M4Y2Qj2ZjFslg4ZUQcrZXTwMug4nUHDRPXqxAFBpKKfFsovSBwGiCYFFCGKiiEKHEYPLza/T2owpRDSaRa/MmeTXwla4j7AmFQd0kxtIrYKEK9R0G5Uy0HGPM+wrC6i41L+A4avez7kYhuYbO9ess+p8VARv0RuEgue0xB/OFaaX5GEvJsTMTFsYX0ZJ3XQP3rQ8nu7+5tLO1ztZrv3w7YM6DaIUMhCwQbDw9+z4SkKYgQdvsA/wBrYgleUhdXncAAAAASUVORK5CYII="} alt='google icon' width={30} height={30} /> Google
            </Button>
          </div>
         </>
         :
         <Loading/>
        }  
      </section>
    </>
  )
}

export default RegisterVia
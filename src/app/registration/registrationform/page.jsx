"use client"
import React, { useContext, useEffect } from 'react'
import RegistrationContext from "@/context/registration/registrationContext";
import { useRouter } from 'next/navigation'
import Loading from "../../../components/common/Loding"

const RegistrationForm = () => {

  const registrationcontext = useContext(RegistrationContext);
  const {registeringUser, googleSignUp, user} = registrationcontext;
  const router = useRouter();

  useEffect(()=>{
    if (registeringUser === null || user === null) {
      router.push("/registration")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
       <section className='page_section' >
       { (registeringUser != null || user != null) ?
         <>
            <div>
              <h1>I am registration form page</h1>
            </div>
         </>
         :
         <Loading />
       }
       </section>
    </>
  )
}

export default RegistrationForm
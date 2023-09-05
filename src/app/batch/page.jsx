"use client"
import React, { useContext, useEffect } from 'react'
import ActiveUserAndLoginStatusContext from '@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext'
import { useRouter } from 'next/navigation'
import Loading from '@/components/common/Loading'
const Batch = () => {

  const router = useRouter();
  const { loginStatus, activeUser, fetchActiveUser } = useContext(ActiveUserAndLoginStatusContext)

  useEffect(() => {
    fetchActiveUser(); // use to every page to check user login status
    if (loginStatus === false) {
      router.push("/login")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginStatus])
  return (
    <>
      {
        loginStatus 
         ?
          <section className='page_section' >
            <h1>Batch</h1>
          </section>
          :
          <section className='page_section' >
            <Loading />
          </section>
      }
    </>
  )
}

export default Batch
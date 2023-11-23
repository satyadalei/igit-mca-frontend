"use client"
import React, { useContext, useEffect } from 'react'
import Gallery from '@/components/gallery/GallerySection'
import activeUserAndLoginStatus from '@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext'
import Loading from '@/components/common/Loading'
import { useRouter } from 'next/navigation'

const galleries = () => {

  const {activeUser, loginStatus} = useContext(activeUserAndLoginStatus);
  const router = useRouter();
  useEffect(()=>{
     if (loginStatus === false) {
        router.push("/login");
     }
  },[loginStatus]);

  return (
    <>
      <section className='page_section' >
         {(activeUser === null || loginStatus === false) && <Loading /> }
         {loginStatus === true && <Gallery /> }
       </section>  
    </>
  )
}

export default galleries
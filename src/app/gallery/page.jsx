"use client"
import React, { useContext, useEffect } from 'react'
import Gallery from '@/components/gallery/GallerySection'
import activeUserAndLoginStatus from '@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext'
import Loading from '@/components/common/Loading'
import { useRouter } from 'next/navigation'
import loadingAndAlertContext from '@/context/loadingAndAlert/loadingAndAlertContext';

const galleries = () => {

  const {activeUser, loginStatus} = useContext(activeUserAndLoginStatus);
  const {createAlert} = useContext(loadingAndAlertContext);

  const router = useRouter();
  useEffect(()=>{
     if (loginStatus === false) {
        router.push("/login",undefined, {shallow: true});
     }
     if (loginStatus === true && activeUser !== null && activeUser.status === 0 ) {
      // user registered but not verified.
      createAlert("warning", "You can access Gallery page only after your account get verified!");
      router.push("/" , undefined, {shallow: true});
    }
  },[loginStatus]);

  return (
    <>
      <section className='page_section' >
         {(activeUser === null || loginStatus === false) && <Loading /> }
         {activeUser !== null && loginStatus === true && activeUser.status === 1 && <Gallery /> }
       </section>  
    </>
  )
}

export default galleries
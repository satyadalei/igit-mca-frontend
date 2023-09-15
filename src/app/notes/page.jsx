"use client"
import React, {useContext, useEffect, useState } from 'react'
import semester from '@/data/semesterData'
import Loading from '@/components/common/Loading';
import styles from "./page.module.css"
import ActiveUserAndLoginStatusContext from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import { useRouter } from "next/navigation";


const Notes = () => {
  const { loginStatus, fetchActiveUser } = useContext(
    ActiveUserAndLoginStatusContext
  );
  const router = useRouter();

  const {allSemesters} = semester;

   // redirects user if user is not log in
   useEffect(() => {
    fetchActiveUser(); // use to every page to check user login status
    if (loginStatus === false) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginStatus]);

  const handleNotesPage = (semNum)=>{
     router.push(`/notes/semester${semNum}`, undefined, { shallow: true })
  }

  return (
    <>
      {loginStatus ? (
        <section className="page_section">
          <div className={styles.allSemContainer} >

          {/* --- All semesters will be populated ----- */}
          {allSemesters.map((semester,index)=>{
            return (
              <div className={styles.semNumBox} onClick={()=>{handleNotesPage(semester)}} key={index} >
               <h1>semester {semester}</h1>
              </div>
            )
          })}
          </div>
        </section>
      ) : (
        <section className="page_section">
          <Loading />
        </section>
      )} 
    </>
  )
}

export default Notes
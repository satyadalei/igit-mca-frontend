"use client"
import React, { useContext, useEffect, useState } from 'react'
import semester from '@/data/semesterData'
import Loading from '@/components/common/Loading';
import styles from "./page.module.css"
import ActiveUserAndLoginStatusContext from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import loadingAndAlertContext from '@/context/loadingAndAlert/loadingAndAlertContext';
import { useRouter } from "next/navigation";
import Link from "next/link"

const Notes = () => {
  const { loginStatus, fetchActiveUser, activeUser } = useContext(
    ActiveUserAndLoginStatusContext
  );
  const {createAlert} = useContext(loadingAndAlertContext);
  const router = useRouter();

  const { allSemesters } = semester;

  // redirects user if user is not log in
  useEffect(() => {
    // fetchActiveUser(); // use to every page to check user login status
    if (loginStatus === false) {
      router.push("/login", undefined, {shallow: true});
      return;
    }
    if (loginStatus === true && activeUser !== null && activeUser.status === 0 ) {
      // user registered but not verified.
      createAlert("warning", "You can access notes page only after your account get verified!");
      router.push("/" , undefined, {shallow: true});
    }
  }, [loginStatus, activeUser]);


  return (
    <>
      {(loginStatus) && (activeUser !== null) && (activeUser.status === 1) ? (
        <section className="page_section">
          <h1 style={{ color: "#3584FC", margin: "1rem 0 0 2rem", textDecoration: "underlined" }} >Select semester for notes!</h1>
          <div className={styles.allSemContainer} >

            {/* --- All semesters will be populated ----- */}
            {allSemesters.map((semester, index) => {
              return (
                <Link key={index} className={styles.semNumBox} href={`/notes/semester${semester}`}  >
                  <div >
                    <h1 className='text-xl font-bold' >semester {semester}</h1>
                  </div>
                </Link>
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
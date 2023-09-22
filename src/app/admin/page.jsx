"use client"
import React, { useContext, useEffect, useState } from "react";
import ActiveUserAndLoginStatusContext from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import Loading from "@/components/common/Loading";
import { useRouter } from "next/navigation";

const AdminHomePage = () => {

  // ----- Context APIs -------
  const { loginStatus, activeUser, fetchActiveUser } = useContext(ActiveUserAndLoginStatusContext);
  const router = useRouter();
  useEffect(() => {
    fetchActiveUser(); // use to every page to check user login status
    if (loginStatus === false) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginStatus]);
  // console.log(activeUser.isSpecialUser);

  return (
    <> 
      {/* <section className='page_section' >
        <div>AdminHomePage</div>
      </section> */}
    </>
  )
}

export default AdminHomePage
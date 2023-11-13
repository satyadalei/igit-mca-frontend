"use client"
import React, { useContext, useEffect, useState } from "react";
import ActiveUserAndLoginStatusContext from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import Loading from "@/components/common/Loading";
import { useRouter } from "next/navigation";
import Admin from "@/components/admin/AdminSection";
const AdminHomePage = () => {

  // ----- Context APIs -------
  const { loginStatus, activeUser, fetchActiveUser } = useContext(ActiveUserAndLoginStatusContext);
  const router = useRouter();
  useEffect(() => {
    fetchActiveUser(); // use to every page to check user login status
    if (loginStatus === false) {
      router.push("/login");
    }
  }, [loginStatus]);

  return (
    <> 
      <section className='min-h-screen' >
        <Admin />
      </section>
    </>
  )
}

export default AdminHomePage
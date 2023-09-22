"use client";
import React, { useContext, useEffect, useState } from "react";
import ActiveUserAndLoginStatusContext from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import Loading from "@/components/common/Loading";
import { useRouter , usePathname} from "next/navigation";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./layout.module.css";
import { Button } from "@mui/material";

const AdminLayOut = ({ children }) => {
  const { loginStatus, activeUser, fetchActiveUser } = useContext(
    ActiveUserAndLoginStatusContext
  );
  const router = useRouter();
  const currentPage = usePathname();
  console.log(currentPage);

  useEffect(() => {
    fetchActiveUser(); // use to every page to check user login status
    if (loginStatus === false) {
      router.push("/login", undefined, { shallow: true });
    }
    if (activeUser != null && activeUser.isSpecialUser != "admin") {
      router.push("/", undefined, { shallow: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginStatus]);
  // console.log(activeUser.isSpecialUser);

  return (
    <>
      {loginStatus === true &&
      activeUser != null &&
      (activeUser.isSpecialUser === "admin" ? true : false) ? (
        <section className="page_section">
              <Box
                sx={
                  {
                    width: '100%'
                  }
                }
              >
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                   <Button onClick={()=>{router.push("/admin/batch")}} variant={`${currentPage === "/admin/batch" ? "contained" : "text" }`} >Batch</Button>
                   <Button onClick={()=>{router.push("/admin/users")}} variant={`${currentPage === "/admin/users" ? "contained" : "text" }`} >User</Button>
                </Box>
              </Box>
            {children}
        </section>
      ) : (
        <section className="page_section">
          <Loading />
        </section>
      )}
    </>
  );
};

export default AdminLayOut;

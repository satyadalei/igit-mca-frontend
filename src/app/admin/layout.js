"use client";
import React, { useContext, useEffect, useState } from "react";
import ActiveUserAndLoginStatusContext from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import Loading from "@/components/common/Loading";
import { useRouter, usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

const AdminLayOut = ({ children }) => {
  const { loginStatus, activeUser, fetchActiveUser } = useContext(
    ActiveUserAndLoginStatusContext
  );
  const router = useRouter();
  const currentPage = usePathname();

  useEffect(() => {
    fetchActiveUser(); // use to every page to check user login status
    if (loginStatus === false) {
      router.push("/login", undefined, { shallow: true });
    }
    if (activeUser != null) {
      const { isSpecialUser } = activeUser;
      if (
        isSpecialUser !== "admin" &&
        isSpecialUser !== "batchAdmin" &&
        isSpecialUser !== "superAdmin"
      ) {
        router.push("/", undefined, { shallow: true });
      }
    }
  }, [loginStatus]);

  return (
    <>
      {loginStatus === true &&
      activeUser != null &&
      (activeUser.isSpecialUser === "admin" ||
      activeUser.isSpecialUser === "batchAdmin" ||
      activeUser.isSpecialUser === "superAdmin"
        ? true
        : false) ? (
        <section className="page_section pl-5 pr-3 ">
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Button
                onClick={() => {
                  router.push("/admin", undefined, { shallow: true });
                }}
                variant={`${currentPage === "/admin" ? "outlined" : "text"}`}
              >
                Admin
              </Button>
              <Button
                onClick={() => {
                  router.push("/admin/users", undefined, { shallow: true });
                }}
                variant={`${
                  currentPage === "/admin/users" ? "outlined" : "text"
                }`}
              >
                User
              </Button>
              <Button
                onClick={() => {
                  router.push("/admin/batch", undefined, { shallow: true });
                }}
                variant={`${
                  currentPage === "/admin/batch" ? "outlined" : "text"
                }`}
              >
                Batch
              </Button>
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

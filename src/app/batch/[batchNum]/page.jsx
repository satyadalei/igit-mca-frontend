"use client";
import React from "react";
import ActiveUserAndLoginStatusContext from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import { useContext, useState, useEffect } from "react";
import batchContext from "@/context/batch/batchContext";
import { useRouter } from "next/navigation";
import Loading from "@/components/common/Loading";

const Page = ({ params }) => {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // ----  CONTEXT APIS -----
  const { loginStatus, activeUser, fetchActiveUser } = useContext(
    ActiveUserAndLoginStatusContext
  );
  const { batches, fetchAllBatch } = useContext(batchContext);

  // ---- STATES -------
  const [isPageExist, setIsPageExist] = useState(null);
  const [studentIds, setStudentIds] = useState(null);
  const paramBatchNum = params.batchNum;
  useEffect(() => {
    fetchActiveUser(); // use to every page to check user login status
    fetchAllBatch();
    if (loginStatus === false) {
      router.push("/login");
    }
    if (batches != null) {
      for (let i = 0; i < batches.length; i++) {
        if (batches[i].batchNum.toString() === paramBatchNum) {
          setIsPageExist(true);
          break;
        } else if (i === batches.length - 1) {
          setIsPageExist(false);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginStatus]);

  const getBatchStudents = async () => {
    const token = localStorage.getItem("token");
    const url = `${baseUrl}/api/batch/${paramBatchNum}/fetchStudents`;
    if (isPageExist && token) {
      // ----- fetchAPi ----
      const fetchStudents = await fetch(url, {
        method: "GET",
        headers: {
          token,
        },
      });
      const response = await fetchStudents.json();
      console.log(response);
      if (response.success) {
        console.log(response.students);
        setStudentIds(response.students);
      }
    } else {
      fetchActiveUser();
    }
  };

  useEffect(() => {
    getBatchStudents();
  }, [isPageExist]);

  return (
    <>
      {loginStatus ? (
        <section className="page_section">
          {isPageExist === false && <h1>Page not found</h1>}
          {isPageExist && (
            <div>
              {/* --- BATCH STUDENTS CONTAINER ---- */}
              {paramBatchNum}
            </div>
          )}
        </section>
      ) : (
        <section className="page_section">
          <Loading />
        </section>
      )}
    </>
  );
};

export default Page;

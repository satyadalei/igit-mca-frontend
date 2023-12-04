"use client";
import React from "react";
import ActiveUserAndLoginStatusContext from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import { useContext, useState, useEffect } from "react";
import batchContext from "@/context/batch/batchContext";
import { useRouter } from "next/navigation";
import Loading from "@/components/common/Loading";
import StudentCard from "./StudentCard";
import styles from "./page.module.css"
import sortStudentInRoll from "./sortStudentsInNames";
import PageNotFound from "@/components/common/PageNotFound"
import loadingAndAlertContext from '@/context/loadingAndAlert/loadingAndAlertContext';

const Page = ({ params }) => {
  const router = useRouter();
  // const paramBatchNum = params.batchNum; // page route number
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


  // ----  CONTEXT APIS -----
  const { loginStatus, activeUser, fetchActiveUser } = useContext(
    ActiveUserAndLoginStatusContext
  );
  const { batches, fetchAllBatch } = useContext(batchContext);
  const {createAlert} = useContext(loadingAndAlertContext);

  // ---- STATES -------
  const [isPageExist, setIsPageExist] = useState(null);
  const [students, setStudents] = useState(null);
  const [batchRoute, setBatchRoute] = useState(params.batchNum);
  const [batchId, setBatchId] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (batches != null) {
      for (let i = 0; i < batches.length; i++) {
        if (batches[i].batchNum.toString() === batchRoute) {
          setIsPageExist(true);
          setBatchId(batches[i]._id);
          break;
        } else if (i === batches.length - 1) {
          setIsPageExist(false);
        }
      }
    }

  })


  useEffect(() => {
    fetchActiveUser(); // use to every page to check user login status
    fetchAllBatch();
    if (loginStatus === false) {
      router.push("/login");
    }

    if (loginStatus === true && activeUser !== null && activeUser.status === 0 ) {
      // user registered but not verified.
      createAlert("warning", "You can access students page only after your account get verified!");
      router.push("/" , undefined, {shallow: true});
    }
  }, []);

  const getBatchStudents = async () => {
    const token = localStorage.getItem("token");
    const url = `${baseUrl}/api/batch/${batchId}/fetchStudents`; // fetch students by their batch Id
    if (isPageExist && token) {
      // ----- fetchAPi ----
      const fetchStudents = await fetch(url, {
        method: "GET",
        headers: {
          token,
        },
      });
      const response = await fetchStudents.json();
      if (response.success) {
        setStudents(sortStudentInRoll(response.students));
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
          {/* {isPageExist === false && <h1>Page not found</h1>} */}
          {isPageExist === false && <PageNotFound />}
          {isPageExist && (
            <div className={styles.students_container_box} >
              {/* --- BATCH STUDENTS CONTAINER ---- */}
              <h1 className={styles.batch_student_heading} >{`${batchRoute} batch students`}</h1>
              {students != null && students.length === 0 && <h1 className="text-lg" >No students registered yet</h1>}
              <div className={styles.only_students_box} >
                {students != null ?
                  students.map((student, index) => {
                    return (
                      <StudentCard  student={student} cardType="student" key={index} />
                    )
                  })
                  :
                  <>
                    {Array.from({ length: 10 }, (_, index) => (
                      <div key={index}>
                        <StudentCard cardType="skeleton" />
                      </div>
                    ))}
                  </>
                }
              </div>
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

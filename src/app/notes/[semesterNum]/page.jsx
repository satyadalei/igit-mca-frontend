"use client"
import React, {useContext, useEffect, useState } from 'react'
import semester from '@/data/semesterData';
import PageNotFound from '@/components/common/PageNotFound';
import Loading from '@/components/common/Loading';
import ActiveUserAndLoginStatusContext from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import { useRouter } from "next/navigation";
import SemesterContent from "./SemesterContent"
import styles from "./page.module.css"
const Page = ({ params }) => {

  const { loginStatus, fetchActiveUser } = useContext(
    ActiveUserAndLoginStatusContext
  );
  const router = useRouter();
  const semesterNum = params.semesterNum ;
  
  // console.log(semester);
  const {allSemesters} = semester;
  const {semester1, semester2, semester3, semester4} = semester;
  // console.log(semester1);
  // console.log(semester2);
  // console.log(semester3);
  // console.log(semester4);

  const [isPageExist, setIsPageExist] = useState(null);
  const semNum = params.semesterNum[semesterNum.length-1] // finding last digit of route
  // console.log(typeof(allSemesters[0].toString()));
  // console.log(typeof(semesterNum[semesterNum.length-1]));

  // checks is page exists
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
      for (let i = 0; i < allSemesters.length; i++) {
        if (allSemesters[i].toString() === semNum) {
          setIsPageExist(true);
          break;
        } else if (i === allSemesters.length - 1) {
          setIsPageExist(false);
        }
      }
  })

  // redirects user if user is not log in
  useEffect(() => {
    fetchActiveUser(); // use to every page to check user login status
    if (loginStatus === false) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginStatus]);

  return (
   <>
    {loginStatus ? (
        <section className="page_section">
          {/* {isPageExist === false && <h1>Page not found</h1>} */}
          {isPageExist === false && <PageNotFound />}
          {isPageExist && (
            <div className={styles.sem_all_subjects_container} >
               { semNum === "1" && <SemesterContent semData={semester1} semNum={1} />}
               { semNum === "2" && <SemesterContent semData={semester2} semNum={2} />}
               { semNum === "3" && <SemesterContent semData={semester3} semNum={3} />}
               { semNum === "4" && <SemesterContent semData={semester4} semNum={4} />}
            </div>
          )}
        </section>
      ) : (
        <section className="page_section">
          <Loading />
        </section>
      )}
   </>
  )
}

export default Page
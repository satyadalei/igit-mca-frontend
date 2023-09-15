"use client"
import React, {useContext, useEffect, useState } from 'react'
import semester from '@/data/semesterData';
import PageNotFound from '@/components/common/PageNotFound';
import Loading from '@/components/common/Loading';
import ActiveUserAndLoginStatusContext from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {

  const { loginStatus, fetchActiveUser } = useContext(
    ActiveUserAndLoginStatusContext
  );
  const router = useRouter();
  const semesterNum = params.semesterNum ;
  // console.log(semester);
  const {allSemesters} = semester;
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
            <div className="" >
               {semesterNum}
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
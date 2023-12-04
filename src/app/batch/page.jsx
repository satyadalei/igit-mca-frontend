"use client";
import React, { useContext, useEffect, useState } from "react";
import ActiveUserAndLoginStatusContext from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import { useRouter } from "next/navigation";
import Loading from "@/components/common/Loading";
import styles from "./page.module.css";
import ActionAreaCard from "./components/Card";
import Alert from "@/components/common/Alert";
import loadingAndAlertContext from "@/context/loadingAndAlert/loadingAndAlertContext";
import sortArrayObject from "./sortBatches"
import BatchSkeleton from "./BatchSkeleton";

const Batch = () => {

  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // ----- Context APIs -------
  const { loginStatus, activeUser, fetchActiveUser } = useContext(ActiveUserAndLoginStatusContext);
  const { alert, setAlert } = useContext(loadingAndAlertContext);


  // ------- States ------
  const [allBatches, setAllBatches] = useState(null);

  // ----------- API CALLS --------
  const fetchAllBatch = async () => {
    const token = localStorage.getItem("token");
    const url = `${baseUrl}/api/batch/fetchAllBatch`
    const fetchBatches = await fetch(url, {
      method: "GET",
      headers: {
        token
      }
    })
    const response = await fetchBatches.json();
    if (response.success) {
      const sortedBatches = sortArrayObject(response.batches)
      setAllBatches(sortedBatches.reverse());
    }
  }
  useEffect(() => {
    fetchActiveUser(); // use to every page to check user login status
    if (loginStatus === false) {
      router.push("/login");
    }
    fetchAllBatch()
  }, [loginStatus]);





  return (
    <>
      {loginStatus ? (
        <section className="page_section">
          {/* --- MAIN BATCH CONTAINER STARTS ------- */}
          {alert.alert && <Alert />}
          <div className={styles.batch_main_container}>
            {/* -------- TOP SECTION STARTS :: LATEST TWO BATCHES ------------ */}
            <div className={styles.top_container_latest_two_batches}>
              <h1 className="text-2xl text-black font-bold mb-5" >Latest batches</h1>
              <div className={styles.latest_batches_and_create_batch_container}>

                {/* two batches latest at top */}
                {allBatches != null ? allBatches.map((batch, index) => {
                  if (index < 2) {
                    return <ActionAreaCard cardType="batch" key={index} batch={batch} />;
                  }
                  return null; // Don't render components beyond the limit
                }) :
                  <>
                    <BatchSkeleton />
                    <BatchSkeleton />
                  </>
                }

                {/* create new batch */}
                {
                  activeUser != null
                  &&
                  (
                    activeUser.isSpecialUser === "admin" &&
                    <div>
                      <ActionAreaCard cardType="create_new_batch" fetchAllBatch={fetchAllBatch} />
                    </div>
                  )
                }
              </div>
            </div>
            {/* -------- TOP SECTION ENDS ------------ */}

            {/* ---------BOTTOM SECTION STARTS :: PREVIOUS BATCHES ------- */}
            <div className={styles.bottom_container_previous_batches}>
              <h1 className="text-2xl text-black font-bold mb-3" >Previous Batches</h1>
              <div className={styles.all_previous_batches} >
                {allBatches != null ? allBatches.map((batch, index) => {
                  if (index > 1) {
                    return <ActionAreaCard cardType="batch" key={index} batch={batch} />;
                  }
                  return null; // Don't render components beyond the limit
                })
                  :
                  <>
                    {Array.from({ length: 9 }, (_, index) => (
                      <div key={index}>
                        <BatchSkeleton />
                      </div>
                    ))}
                  </>
                }
              </div>
            </div>
            {/* ---------BOTTOM SECTION ENDS :: PREVIOUS BATCHES ------- */}
          </div>
          {/* --- MAIN BATCH CONTAINER ENDS ------- */}
        </section>
      ) : (
        <section className="page_section">
          <Loading />
        </section>
      )}
    </>
  );
};

export default Batch;

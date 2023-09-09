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
    } else {
      setAlert({
        alert: true,
        alertType: "error",
        alertMessage: response.message
      })
    }
  }
  useEffect(() => {
    fetchActiveUser(); // use to every page to check user login status
    if (loginStatus === false) {
      router.push("/login");
    }
    fetchAllBatch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <h1 className={styles.latest_batches} >Latest batches</h1>
              <div className={styles.latest_batches_and_create_batch_container}>

                {/* two batches latest at top */}
                  { allBatches != null && allBatches.map((batch, index) => {
                    if (index < 2) {
                      return <ActionAreaCard cardType="batch" key={index} batch={batch} />;
                    }
                    return null; // Don't render components beyond the limit
                  })}

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
              <h1 className={styles.prev_batch} >Previous Batches</h1>
              <div className={styles.all_previous_batches} >
              { allBatches != null && allBatches.map((batch, index) => {
                    if (index > 1) {
                      return <ActionAreaCard cardType="batch" key={index} batch={batch} />;
                    }
                    return null; // Don't render components beyond the limit
                  })}
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

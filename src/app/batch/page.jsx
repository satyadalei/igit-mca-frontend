"use client";
import React, { useContext, useEffect } from "react";
import ActiveUserAndLoginStatusContext from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import { useRouter } from "next/navigation";
import Loading from "@/components/common/Loading";
import styles from "./page.module.css";
import ActionAreaCard from "./components/Card";
import Alert from "@/components/common/Alert";
import loadingAndAlertContext from "@/context/loadingAndAlert/loadingAndAlertContext";
const Batch = () => {


  const router = useRouter();
  const { loginStatus, activeUser, fetchActiveUser } = useContext(
    ActiveUserAndLoginStatusContext
  );

  const { alert } = useContext(
    loadingAndAlertContext
);

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
          {/* --- MAIN BATCH CONTAINER STARTS ------- */}
          {alert.alert && <Alert/>}
          <div className={styles.batch_main_container}>
            {/* -------- TOP SECTION STARTS :: LATEST TWO BATCHES ------------ */}
            <div className={styles.top_container_latest_two_batches}>
              <h1>Latest batches</h1>
              <div className={styles.latest_batches_and_create_batch_container}>
                {/* batch latest at top */}
                <div>
                  <ActionAreaCard cardType="batch" />
                </div>
                {/* batch just below latest */}
                <div>
                  <ActionAreaCard cardType="batch" />
                  {/* I am below latest batch */}
                </div>

                {/* create new batch */}
                <div>
                  <ActionAreaCard cardType="create_new_batch" />
                </div>
              </div>
            </div>
            {/* -------- TOP SECTION ENDS ------------ */}

            {/* ---------BOTTOM SECTION STARTS :: PREVIOUS BATCHES ------- */}
            <div className={styles.bottom_container_previous_batches}>
              <h1>Previous Batches</h1>
              <div className={styles.all_previous_batches} >
                <ActionAreaCard cardType="batch" />
                <ActionAreaCard cardType="batch" />
                <ActionAreaCard cardType="batch" />
                <ActionAreaCard cardType="batch" />
                <ActionAreaCard cardType="batch" />
                <ActionAreaCard cardType="batch" />
                <ActionAreaCard cardType="batch" />
                <ActionAreaCard cardType="batch" />
                <ActionAreaCard cardType="batch" />
                <ActionAreaCard cardType="batch" />
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

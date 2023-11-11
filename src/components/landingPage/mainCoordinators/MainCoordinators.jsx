"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./coordinator.module.css";
import Coordinator from "./Coordinator";
import { Button } from "@mui/material";
import batchContext from "@/context/batch/batchContext";
import SkeletonCoordinators from "./SkeletonCoordinators";

const MainCoordinators = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const {fetchBatchLists, batchLists } =
    useContext(batchContext);
  const [batchCoordiNators, setBatchCoordiNators] = useState();

  // call api to fetch coordinators of the 2nd year students
  const fetchCoordinators = async () => {
    let batchId;
    if (batchLists.length === 0) {
      setBatchCoordiNators([]); //there will be no coordinators
      return;
    }
    if (batchLists.length === 1) {
      batchId = batchLists[0]._id;
    } else {
      batchId = batchLists[batchLists.length - 2]._id;
    }
    const url = `${baseUrl}/api/coordinators/${batchId}`;
    try {
      const coordinators = await fetch(url, {
        method: "GET",
      });
      const response = await coordinators.json();
      console.log("Coordinator ", response);
      if (response.success) {
        setBatchCoordiNators(response.batchCoordinators);
      }
    } catch (error) {
      console.log("Error in fetching the coordinator", error);
      setBatchCoordiNators([]);
    }
  };

  // Coordinators will be shown once all batch lists loads
  useEffect(() => {
    fetchBatchLists();
  }, []);

  useEffect(() => {
    if (batchLists != null) {
      console.log(batchLists.length);
      fetchCoordinators();
    }
  }, [batchLists]);

  return (
    <>
      <hr className="divider" />
      <div className={styles.container_section}>
        <h1 className={styles.main_heading}>Our Coordinators</h1>
        <div className={styles.coordinators_box}>
          {/* <Coordinator name={"Sandeep Kumar Das"} tag={"Class Representative"} />

          <Coordinator name={"Bandana Priyadarshani Jena"} tag={"Class Representative"} /> */}
          {batchCoordiNators != null ? (
            batchCoordiNators.map((coordiNator, index) => {
              return coordiNator.tag === "CR/BR" ? (
                <Coordinator
                  key={index}
                  name={
                    `${coordiNator.userDetails.fName || ""}` +
                    " " +
                    `${coordiNator.userDetails.mName || ""}` +
                    " " +
                    `${coordiNator.userDetails.lName || ""}`
                  }
                  tag={coordiNator.tag}
                  profile={coordiNator.profilePic.url}
                />
              ) : null;
            })
          ) : (
            <>
              {/* creates 50 element array */}
              {Array.from({ length: 2 }, (_, index) => (
                <div key={index}>
                  <SkeletonCoordinators />
                </div>
              ))}
            </>
          )}
        </div>
        <div className={styles.meet_btn_box}>
          <Button variant="contained" className={styles.meet_btn}>
            Meet Other coordinators
          </Button>
        </div>
      </div>
    </>
  );
};

export default MainCoordinators;

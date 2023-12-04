"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./coordinator.module.css";
import Coordinator from "./Coordinator";
import batchContext from "@/context/batch/batchContext";
import SkeletonCoordinators from "./SkeletonCoordinators";
import { motion } from "framer-motion";

// Define the variants for the title animation
const titleVariants = {
  hide: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const MainCoordinators = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const { fetchBatchLists, batchLists } = useContext(batchContext);
  const [batchCoordiNators, setBatchCoordiNators] = useState();

  // call api to fetch coordinators of the 2nd year students
  const fetchCoordinators = async () => {
    let batchId2ndYr;
    if (batchLists.length === 0) {
      setBatchCoordiNators([]); //there will be no coordinators
      return;
    }
    if (batchLists.length === 1) {
      batchId2ndYr = batchLists[0]._id;
    } else {
      batchId2ndYr = batchLists[batchLists.length - 2]._id;
    }
    const url = `${baseUrl}/api/coordinators/${batchId2ndYr}`;
    try {
      const coordinators = await fetch(url, {
        method: "GET",
      });
      const response = await coordinators.json();
      if (response.success) {
        setBatchCoordiNators(response.batchCoordinators);
      }
    } catch (error) {
      console.log("Error in fetching the coordinator", error);
      setBatchCoordiNators([]);
    }
  };

  useEffect(() => {
    if (batchLists != null) {
      fetchCoordinators();
    }
  }, [batchLists]);

  return (
    <>
      <hr className="divider" />
      <div className={styles.container_section}>
        <h1 className={styles.main_heading}>Class Representatives</h1>
        <div className={styles.coordinators_box}>
          {batchCoordiNators != null ? (
            batchCoordiNators.map((coordiNator, index) => {
              return coordiNator.tag === "CR/BR" ? (
                <motion.div
                  className="title"
                  variants={titleVariants}
                  initial="hide"
                  whileInView="show"
                  whileOut="hide"
                  key={index}
                >
                  <Coordinator
                    name={coordiNator.userDetails.name}
                    batch={coordiNator.batchNum}
                    profile={coordiNator.profilePic.url}
                    email={coordiNator.email}
                    links={coordiNator.userDetails.socialLinks}
                  />
                </motion.div>
              ) : null;
            })
          ) : (
            <>
              {Array.from({ length: 2 }, (_, index) => (
                <div key={index}>
                  <SkeletonCoordinators />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MainCoordinators;

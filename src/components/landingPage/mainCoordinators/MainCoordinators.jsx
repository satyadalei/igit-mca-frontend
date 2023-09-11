/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useContext, useEffect, useState } from 'react'
import styles from "./coordinator.module.css"
import Coordinator from './Coordinator'
import { Button } from '@mui/material'
import batchContext from '@/context/batch/batchContext'
import SkeletonCoordinators from './SkeletonCoordinators'
const MainCoordinators = () => {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // call api to fetch coordinators of the 2nd year students
  const { batches, fetchAllBatch } = useContext(batchContext)

  const [batchCoordiNators, setBatchCoordiNators] = useState(null)

  const fetchCoordinators = async () => {
    const url = `${baseUrl}/api/coordinators/${batches[1].batchNum}`
    //console.log(url);
    const coordinators = await fetch(url, {
      method: "GET"
    })
    const response = await coordinators.json();
    console.log(response.batchCoordinators);
    if (response.success) {
      setBatchCoordiNators(response.batchCoordinators);
    }
  }
  console.log(batchCoordiNators);
  useEffect(() => {
    if (batches != null) {
      // fetchCoordinators()
    }
  }, [batches])
  useEffect(() => {
    fetchAllBatch()
    // when second year is fully defined then only call api
  }, [])
  return (
    <>
      <hr className="divider" />
      <div className={styles.container_section} >
        <h1 className={styles.main_heading} >Our Coordinators</h1>
        <div className={styles.coordinators_box}>
          {/* <Coordinator name={"Sandeep Kumar Das"} tag={"Class Representative"} />

          <Coordinator name={"Bandana Priyadarshani Jena"} tag={"Class Representative"} /> */}

          {batchCoordiNators != null ?
            batchCoordiNators.map((coordiNator, index) => {
              return (<Coordinator
                key={index}
                name={`${coordiNator.userDetails.fName || ""}` +
                  " " +
                  `${coordiNator.userDetails.mName || ""}` +
                  " " +
                  `${coordiNator.userDetails.lName || ""}`}
                tag={coordiNator.tag}
                profile={coordiNator.profilePic.url}
              />)
            })
            :
            <>
            {/* creates 50 element array */}
              {Array.from({ length: 50 }, (_, index) => (
                <div key={index}>
                  <SkeletonCoordinators />
                </div>
              ))}
              {/* <SkeletonCoordinators />
              <SkeletonCoordinators />
              <SkeletonCoordinators />
              <SkeletonCoordinators />
              <SkeletonCoordinators />
              <SkeletonCoordinators />
              <SkeletonCoordinators />
              <SkeletonCoordinators /> */}
            </>
          }
        </div>
        <div className={styles.meet_btn_box} >
          <Button variant="contained" className={styles.meet_btn} >Meet Other coordinators</Button>
        </div>
      </div>
    </>
  )
}

export default MainCoordinators
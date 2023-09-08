"use client"
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import styles from "./register.module.css";
import { Badge, Button, Typography } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RegistrationContext from "@/context/registration/registrationContext";
import sortArrayObject from "../batch/sortBatches";
import Loading from "@/components/common/Loading";
import Link from "next/link";




const Registration = () => {

  const router = useRouter()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // ------ STATES ------------
  const [batchLists, setBatchLists] = useState(null);

  // ------ CONTEXT APIS --------
  const { updateBatch } = useContext(RegistrationContext);

  // ------ API CALLS ---------
  const fetchBatchLists = async () => {
    const url = `${baseUrl}/api/batch/fetchBatchLists`;
    const fetchBatch = await fetch(url, {
      method: "GET"
    })
    const response = await fetchBatch.json();
    if (response.success) {
      const sortedBatches = sortArrayObject(response.batchLists);
      setBatchLists(sortedBatches.reverse());
    } else {
      console.log(response);
      // create alert
    }
  }

  const handleBatch = (batch) => {
    updateBatch(batch);
    router.push('/registration/registervia')
  }

  useEffect(() => {
    fetchBatchLists();
  })

  return (
    <>
      <section className="page_section">
        <div className={styles.register_main_container}>
          <div className={styles.register_box}>
            <Typography className={styles.register_heading} variant="h4" component="h3">
              Register As!!
            </Typography>
            <p style={{
                color:"black",
                marginTop: "1rem",
                textAlign: "center",
                marginBottom:"2rem"
              }} >Already registered?  &nbsp;
                <Link
                  style={{
                    textDecoration: "none", color: "#088dec",
                  }}
                  href={"/login"} >
                  Login here!
                </Link> 
            </p>
            {
              batchLists != null ?
                <>
                  {batchLists.map((batch, index) => {
                    if (index === 0) {
                      return (
                        <Badge key={index} color="error" badgeContent="New">
                          <Button key={index} style={{ margin: "0.8rem 0 0.8rem 0", backgroundColor: `${index % 2 === 0 ? "orange" : ""}` }} onClick={() => { handleBatch(batch.batchNum) }} className={styles.second_yr_btn} variant="contained" startIcon={<PersonAddIcon />}>
                            {batch.batchNum} Batch ({batch.startingYear} - {batch.endingYear})
                          </Button>
                        </Badge>
                      )
                    }
                    return (
                      <Button key={index} style={{ margin: "0.8rem 0 0.8rem 0", backgroundColor: `${index % 2 === 0 ? "orange" : ""}` }} onClick={() => { handleBatch(batch.batchNum) }} className={styles.second_yr_btn} variant="contained" startIcon={<PersonAddIcon />}>
                        {batch.batchNum} Batch ({batch.startingYear} - {batch.endingYear})
                      </Button>
                    )
                  })}
                </>
                :
                <Loading />
            }

            {/* <Button style={{ backgroundColor: "orange" }} onClick={() => { handleBatch(41) }} className={styles.second_yr_btn} variant="contained" startIcon={<PersonAddIcon />}>
              41 Batch (2022-24)
            </Button>
            <br />
            <Badge color="error" badgeContent="New">
              <Button onClick={() => { handleBatch(42) }} className={styles.first_yr_btn} variant="contained" startIcon={<PersonAddIcon />}>
                42 Batch (2023-25)
              </Button>
            </Badge> */}

          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;

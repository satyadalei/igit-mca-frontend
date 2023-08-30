"use client"
import React, { useContext } from "react";
import { useRouter } from 'next/navigation'
import styles from "./register.module.css";
import { Badge, Button, Typography } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RegistrationContext from "@/context/registration/registrationContext";





const Registration = () => {
  const registrationContext = useContext(RegistrationContext);
  const {updateBatch} = registrationContext;
  const router = useRouter()

  const handleBatch = (batch)=>{
    updateBatch(batch);
    router.push('/registration/registervia')
  }

  return (
    <>
      <section className="page_section">
        <div className={styles.register_main_container}>
          <div className={styles.register_box}>
            <Typography className={styles.register_heading} variant="h4" component="h3">
              Register As!!
            </Typography>
            <Button style={{backgroundColor:"orange"}} onClick={()=>{handleBatch(41)}} className={styles.second_yr_btn} variant="contained" startIcon={<PersonAddIcon />}>
              41 Batch (2022-24)
            </Button>
            <br />
            <Badge color="error" badgeContent="New">
              <Button onClick={()=>{handleBatch(42)}} className={styles.first_yr_btn} variant="contained" startIcon={<PersonAddIcon />}>
               42 Batch (2023-25)
              </Button>
            </Badge>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;

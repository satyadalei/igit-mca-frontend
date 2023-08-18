/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from "./coordinator.module.css"
import Coordinator from './Coordinator'
import { Button } from '@mui/material'
const MainCoordinators = () => {
    return (
        <>
           <hr className="divider" />
           <div className={styles.container_section} >
             <h1 className={styles.main_heading} >Class representatives</h1>
             <div className={styles.coordinators_box}>
                  <Coordinator name={"Sandeep Kumar Das"} tag={"Class Representative"} />

                  <Coordinator name={"Bandana Priyadarshani Jena"} tag={"Class Representative"} />
             </div>
             <div className={styles.meet_btn_box} >
             <Button variant="contained" className={styles.meet_btn} >Meet Other coordinators</Button>
             </div>
           </div>
        </>
    )
}

export default MainCoordinators
"use client"
import { Avatar } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from "./coordinator.module.css"
import Link from "next/link";

const Coordinator = (props) => {
    const { linkedInLink } = props.links;
    return (
            <div className={styles.coordinator_item}  >
                <Avatar className={styles.avatar} sx={{ width: 100, height: 100 }} src={props.profile} />
                <h3 className={styles.cordinator_name} >
                    {props.name}
                </h3>
                <p className={styles.cordinator_tag} >Batch : {props.batch}</p>
                   
                <p>
                   <Link href={linkedInLink} className='cursor-pointer text-blue-500 mr-1' target='_blank'  >
                     <LinkedInIcon />
                   </Link>
                </p>
            </div>
    )
}

export default Coordinator
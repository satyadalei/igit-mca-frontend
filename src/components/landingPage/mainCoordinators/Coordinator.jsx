import { Avatar } from '@mui/material'
import React from 'react'
import styles from "./coordinator.module.css"
const Coordinator = (props) => {
    return (
        <>
            <div className={styles.coordinator_item}  >
                <Avatar className={styles.avatar} sx={{ width: 100, height: 100}} src={props.profile} />
                <h3 className={styles.cordinator_name} >
                    {props.name}
                </h3>
                <p className={styles.cordinator_tag} >{props.tag}</p>
            </div>
        </>
    )
}

export default Coordinator
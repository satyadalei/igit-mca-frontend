import React from 'react'
import styles from "./navbar.module.css"
import { Typography } from '@mui/material'

const UserName = (props) => {
  return (
    <div>
        <Typography className={styles.user_name} 
        // style={{ marginRight: "1rem" }} 
        >
          {(props.userDetails.fName || "") + " " +
          (props.userDetails.mName || "") + " " +
          (props.userDetails.lName || " ")}
        </Typography>
    </div>
  )
}

export default UserName
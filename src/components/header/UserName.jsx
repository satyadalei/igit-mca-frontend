import React from 'react'
import styles from "./navbar.module.css"
import { Typography } from '@mui/material'

const UserName = (props) => {
  const {name} = props ;
  return (
    <div>
        <Typography className={styles.user_name} 
        // style={{ marginRight: "1rem" }} 
        >
          {name}
        </Typography>
    </div>
  )
}

export default UserName
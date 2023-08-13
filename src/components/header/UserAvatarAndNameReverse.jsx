import { Avatar, Typography } from '@mui/material'
import React from 'react'
import styles from "./navbar.module.css"
import VerifiedIcon from '@mui/icons-material/Verified';
const UserAvatarAndNameReverse = () => {
  return (
    <div className={styles.avatar_name_for_responsive_nav} >
        <Avatar className={styles.avatar} alt="Remy Sharp" src="" />
        <div>
        <Typography className={styles.user_name} style={{ marginRight: "1rem" }} >
          Satyanarayan
        </Typography>
        <div className={styles.verification_status} >
        <VerifiedIcon style={{fontSize:"15px", marginRight:"5px"}} />
        Verified</div>
        </div>
       
    </div>
  )
}

export default UserAvatarAndNameReverse
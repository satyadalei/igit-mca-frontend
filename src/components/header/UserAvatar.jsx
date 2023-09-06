import React from 'react'
import styles from "./navbar.module.css"
import { Avatar } from '@mui/material'

const UserAvatar = (props) => {
  return (
    <>
      <Avatar className={styles.avatar} alt={props.userName} src={props.profileUrl} />
    </>
  )
}

export default UserAvatar
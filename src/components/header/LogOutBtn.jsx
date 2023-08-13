import React from 'react'
import styles from "./navbar.module.css"
const LogOutBtn = () => {
  return (
    <div>
        <span className={styles.logout_btn} >
          Logout
        </span>
    </div>
  )
}

export default LogOutBtn
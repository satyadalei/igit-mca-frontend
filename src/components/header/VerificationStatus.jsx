import React from 'react'
import styles from "./navbar.module.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';
const VerificationStatus = (props) => {
    return (
        <div>
            {
              props.status === 1 ?
                <div className={styles.verification_status} >
                    <VerifiedIcon style={{ fontSize: "15px", marginRight: "5px", color:"#3584FC" }} />
                    Verified
                </div>
              : 
                <div className={styles.verification_status} >
                    <CancelIcon style={{ fontSize: "15px", marginRight: "5px",color:"red" }} />
                    not verified
                </div>
            }
        </div>
    )
}

export default VerificationStatus
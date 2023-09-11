import { Avatar, Skeleton } from '@mui/material'
import React from 'react'
import styles from "./coordinator.module.css"

const SkeletonCoordinators = () => {
    return (
        <>
            <div className={styles.coordinator_item}  >
                <Skeleton variant='circular' className={styles.avatar} sx={{ width: 100, height: 100 }} />

                <Skeleton style={{ width: "200px" }} className={styles.cordinator_name} variant="text" sx={{ fontSize: '1.5rem' }} />

                <Skeleton style={{ width: "100px" }} className={styles.cordinator_tag} variant="text" sx={{ fontSize: '1rem' }} />
            </div>
        </>
    )
}

export default SkeletonCoordinators
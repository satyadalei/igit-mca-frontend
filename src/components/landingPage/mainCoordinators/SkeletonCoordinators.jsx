import { Avatar, Skeleton } from '@mui/material'
import React from 'react'
import styles from "./coordinator.module.css"

const SkeletonCoordinators = ({className,circleClass, middleBarClass, lastBarClass}) => {
    return (
        <>
            <div className={`${styles.coordinator_item} ${className}`}  >
                <Skeleton variant='circular' className={`${styles.avatar} ${circleClass}`} sx={{ width: 100, height: 100 }} />

                <Skeleton style={{ width: "200px" }} className={`${styles.cordinator_name} ${middleBarClass}`} variant="text" sx={{ fontSize: '1.5rem' }} />

                <Skeleton style={{ width: "100px" }} className={`${styles.cordinator_tag} ${lastBarClass}`} variant="text" sx={{ fontSize: '1rem' }} />
            </div>
        </>
    )
}

export default SkeletonCoordinators
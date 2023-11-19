import React from 'react'
import Skeleton from '@mui/material/Skeleton';

const UserProfileSkeleton = ({mobileMode}) => {
    if (mobileMode === undefined) {
        mobileMode = false ;   
    }
    return (
        <div className={`flex ${mobileMode && 'flex-row-reverse' }`} >
            <div className={`flex flex-col ${mobileMode ? 'items-start' : 'items-end'}  mr-1`}>
               <Skeleton variant="text"  sx={{ fontSize: '1rem', bgcolor:"white", width:"150px" }} />
               <Skeleton variant="text" sx={{ fontSize: '1rem', bgcolor:"white", width:"100px" }} />
            </div>
            <Skeleton variant="circular" sx={{bgcolor:"white"}} width={40} height={40} />
        </div>
    )
}

export default UserProfileSkeleton
// flex-row-reverse
// items-start
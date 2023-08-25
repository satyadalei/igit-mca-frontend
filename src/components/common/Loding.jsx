import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Loding = () => {
  return (
    <div className='page_section' >
        <Box sx={{ display: 'flex', alignItems:"center", justifyContent:"center", height:"60vh" }}>
           <CircularProgress />
         </Box>
    </div>
  )
}

export default Loding
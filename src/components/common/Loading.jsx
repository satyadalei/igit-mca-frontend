import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Loading = () => {
  return (
    <>
      <div className='loading_component' >
        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      </div>

      {/* Initial loader */}
      {/* <div className='page_section' >
        <Box sx={{ display: 'flex', alignItems:"center", justifyContent:"center", height:"60vh" }}>
           <CircularProgress />
         </Box>
    </div> */}
    </>
  )
}

export default Loading
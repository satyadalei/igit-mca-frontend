import { Button } from '@mui/material'
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
const registration = () => {
  return (
    <>
      <section className='page_section' >
          <div>
                    <h1>Register via</h1>
                    <Button variant="contained" >
                       Google
                    </Button>
                </div>
      </section>
    </>
  )
}

export default registration
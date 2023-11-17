import React from 'react'

const BasicModalBackground = ({children}) => {
  return (
    <div className='fixed left-0 top-0 w-[100%] h-screen bg-black/75 flex justify-center items-center' style={{zIndex:"1000"}} >
      {children}
    </div>
  )
}

export default BasicModalBackground
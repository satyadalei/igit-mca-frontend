import Image from 'next/image'
import React from 'react'
import PageNotFoundErrorImage from "../../../public/images/pagenotfound.png"
const PageNotFound = () => {
  return (
    <div 
    style={{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignContent: "center"
    }}
    >
        <Image
         style={{
            width:"80%",
            height:"auto",
            maxWidth:"500px"
         }}
         src={PageNotFoundErrorImage} width={300} height={300} alt="Page not found" />
    </div>
  )
}

export default PageNotFound
"use client"
import React from 'react'

const GeneralButton = ({children, buttonText,className, onClick, variant}) => {
  return (
    <div onClick={onClick} className={`inline transition p-1 pl-2 pr-2 ml-1 mr-2  bg-sky-500 hover:bg-sky-600
    ${variant === "contained" && 'bg-sky-500 hover:bg-sky-600'}
    ${variant === "outlined" && 'bg-white border-2 border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500'}
    
    cursor-pointer text-white rounded-md ${className}`} >
      {children || buttonText || "Button"}
    </div>
  )
}

export default GeneralButton
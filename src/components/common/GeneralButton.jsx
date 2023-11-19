"use client"
import React from 'react'

const GeneralButton = ({children, buttonText,className, onClick, variant, disabled}) => {
  
  return (
    <div onClick={onClick} className={`inline transition ease-in-out p-1 pl-2 pr-2 ml-1 mr-2  hover:bg-sky-600 hover:text-white text-white bg-sky-500
    ${variant === "contained" && 'bg-sky-500 hover:bg-sky-600 text-white'}
    ${variant === "outlined" && 'bg-white border-2 !text-sky-500 border-sky-500 hover:!text-white hover:bg-sky-500'}
    cursor-pointer rounded-md ${className} ${disabled && 'pointer-events-none !bg-gray-200'}`} >
      {children || buttonText || "Button"}
    </div>
  )
}

export default GeneralButton
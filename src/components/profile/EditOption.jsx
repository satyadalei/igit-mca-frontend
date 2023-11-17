import React from 'react'
import EditIcon from '@mui/icons-material/Edit';

const EditOption = ({editText, onClick, className}) => {
  return (
    <p onClick={onClick} className={`flex items-center text-sky-500 cursor-pointer ${className}`} > <EditIcon /> Edit {editText} </p>
  )
}

export default EditOption
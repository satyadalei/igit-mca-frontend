import React from 'react'
import { Avatar } from '@mui/material'

const UserAvatar = (props) => {
  const {className} = props;
  return (
      <Avatar className={`mr-0.5 ${className}`} alt={props.userName} src={props.profileUrl} />
  )
}

export default UserAvatar
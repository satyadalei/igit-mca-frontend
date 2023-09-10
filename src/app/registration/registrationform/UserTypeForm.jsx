import React from 'react'
const UserTypeForm = (props) => {
    return (
        <>
            <h1 style={{color: "#3584FC", paddingLeft:"0.5rem"}}>
                {props.mainHeading} 
            </h1>
            <p style={{color: "#8eb8f8",paddingLeft:"0.5rem"}} >
                {props.subHeading} 
            </p>
        </>
    )
}

export default UserTypeForm
"use client"

import { Avatar } from '@mui/material'
import React, { useContext } from 'react'
import ActiveUserAndLoginStatusContext from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import loadingAndAlertContext from '@/context/loadingAndAlert/loadingAndAlertContext';
import Link from "next/link"
const UserDetails = (props) => {
   const { activeUser, logOutUser } = useContext(ActiveUserAndLoginStatusContext);
   const { setLoading, createAlert, stopLoading } = useContext(loadingAndAlertContext);
   const { fetchUserAccounts } = props;
   const baseApi = process.env.NEXT_PUBLIC_BASE_URL

   const { isSpecialUser } = activeUser;
   const user = props.user;
   const { _id, email, status, batchNum, batchId, rollNum, fieldOfInterest, tag } = user;
   const { url } = user.profilePic;
   const { regNum, homeDist, mobile, gradCourse, name } = user.userDetails;
   const { linkedInLink, githubLink } = user.userDetails.socialLinks;


   const token = localStorage.getItem("token");

   const handleVerifyUser = async (userId) => {
      try {
         // call api to set user as verify
         setLoading(true);
         const url = `${baseApi}/api/accounts/admin/verifyUser?userId=${userId}`
         const verifyUser = await fetch(url, {
            method: "POST",
            headers: {
               "token": token
            }
         })
         const response = await verifyUser.json();
         stopLoading();

         if (response.success) {
            createAlert("success", "User account verified!");
            fetchUserAccounts();
         } else {
            createAlert("error", response.message.split("#")[0])
         }
      } catch (error) {
         stopLoading();
         console.log("Some error occurred verifying user accounts ", error);
         createAlert("error", "Error in verifying user.")
      }
   }

   const handleDeleteUser = async (userId)=>{
      try {
         const dangerAlert = window.confirm("Warning!! ⚠️⚠️⚠️💀💀💀 !! Delete Operation !!  ");
         if (dangerAlert === false) {
            return ;
         }
         const isConfirm = window.confirm(`This user will be permanently delete. Do you want to proceed.`);
         if (isConfirm === false) {
            return;
         }
         const passKey = window.prompt("Enter pass key to delete!");
         setLoading(true);
         const url = `${baseApi}/api/accounts/admin/deleteUser?deleteUserId=${userId}&passKey=${passKey}`
         const verifyUser = await fetch(url, {
            method: "DELETE",
            headers: {
               "token": token
            }
         })
         const response = await verifyUser.json();
         stopLoading();
         if (response.success) {
            createAlert("success", response.message.split("#")[0]);
            fetchUserAccounts();
            return;
         }
         createAlert("error", response.message.split("#")[0])
      } catch (error) {
         stopLoading();
         console.log("Some error occurred deleting user account ", error);
         createAlert("error", "Error in deleting user account!")
      }
   }

   return (
      <div className='' >
         <div className='flex justify-around w-full' >
            <div className='w-[33%]' >
               <p>Email: {email} </p>
               <p>Batch: {batchNum} </p>
               <p>Registration number: {regNum} </p>
               <p>Roll number: {rollNum} </p>
               <p>District: {homeDist} </p>
            </div>
            <div className='w-[33%]' >
               <p>Mobile: {mobile} </p>
               <p>Graduation: {gradCourse} </p>
               <p>Field of interest: {fieldOfInterest} </p>
               <p>Tag: {tag} </p>
               <p>Linkedin: <Link target='_blank' href={linkedInLink} >{linkedInLink}</Link> </p>
               <p>Github: <Link target='_blank' href={githubLink}>{githubLink}</Link> </p>
            </div>
            <div className='w-[33%]' >
               <Avatar sx={{ width: "150px", height: "150px" }} src={url} alt={name} />
            </div>
         </div>
         {/* --- Action buttons ----- */}
         <div>
            {status === 0 &&
              <button className={`relative
              bg-sky-500 text-white p-2 mr-5 overflow-hidden 
                ${isSpecialUser === "batchAdmin" && activeUser.batchNum != batchNum && "cursor-not-allowed hover:overflow-visible"}
              `}
                 disabled={isSpecialUser === "batchAdmin" && activeUser.batchNum != batchNum && 'disabled'}
                 onClick={() => { handleVerifyUser(_id) }}
              >
                 Mark as verified
                 <span className="absolute block bg-black text-xs w-46 -top-[90%] -left-0">
                    Batch admin can verify their classmates only!</span>
              </button>
            }
            {(isSpecialUser === "admin" || isSpecialUser === "superAdmin") &&
               <button onClick={()=>{handleDeleteUser(_id)}} className='bg-red-500 outline-none outline-0 text-white p-2 mr-5' >Delete User</button>
            }
         </div>
      </div>
   )
}

export default UserDetails
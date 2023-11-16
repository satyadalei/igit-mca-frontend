import { Avatar } from '@mui/material'
import React, { useContext } from 'react'
import ActiveUserAndLoginStatusContext from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import loadingAndAlertContext from '@/context/loadingAndAlert/loadingAndAlertContext';

const UserDetails = (props) => {
   const { activeUser, logOutUser } = useContext(ActiveUserAndLoginStatusContext);
   const { setLoading, createAlert, stopLoading } = useContext(loadingAndAlertContext);
   const { fetchUserAccounts } = props;
   const baseApi = process.env.NEXT_PUBLIC_BASE_URL

   const { isSpecialUser } = activeUser;
   const user = props.user;
   const { _id, email, status, batchNum, batchId, rollNum, fieldOfInterest, tag } = user;
   const { url } = user.profilePic;
   const { regNum, fName, lName, mName, homeDist, mobile, gradCourse } = user.userDetails;
   const { linkedInLink, githubLink } = user.userDetails.socialLinks;


   const handleVerifyUser = async (userId) => {
      try {
         console.log(userId);
         // call api to set user as verify
         const token = localStorage.getItem("token")
         if (!token) {
            logOutUser();
            return;
         }
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
         createAlert("error", response.message.split("#")[0])
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
               <p>Linkedin: <a href={linkedInLink} >{linkedInLink}</a> </p>
               <p>Github: <a href={githubLink}>{githubLink}</a> </p>
            </div>
            <div className='w-[33%]' >
               <Avatar sx={{ width: "150px", height: "150px" }} src={url} alt={fName + mName + lName} />
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
               <button className='bg-red-500 outline-none outline-0 text-white p-2 mr-5' >Delete User</button>
            }
         </div>
      </div>
   )
}

export default UserDetails
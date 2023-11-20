import { TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import GeneralButton from "../common/GeneralButton";
import CommonModalBox from '../modal/CommonModalBox';
import loadingAndAlertContext from "@/context/loadingAndAlert/loadingAndAlertContext";
import activeUserAndLoginStatus from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";


const EditSocialLinks = ({ socialLinks, closeModal }) => {

  // --- API URL ---
  const baseApi = process.env.NEXT_PUBLIC_BASE_URL;
  // ------ context API -----
  const { startLoading, createAlert, stopLoading } = useContext(loadingAndAlertContext);
  const { fetchActiveUser } = useContext(activeUserAndLoginStatus);

  // ----- local storage -----
  const token = localStorage.getItem("token");

  const { githubLink, linkedInLink } = socialLinks;
  const [links, setLinks] = useState({
    githubLink: githubLink,
    linkedInLink: linkedInLink,
  });

  const handleLinkChange = (e) => {
    console.log();
    setLinks((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const updateSocialLinks = async ()=>{
    try {
      startLoading();
      const url = `${baseApi}/api/user/editProfile/socialLinks`
      const changeSocialLinks = await fetch(url,{
        method:"PUT",
        headers : {
          'Content-Type': 'application/json',
          'token': token
        },
        body : JSON.stringify({ socialLinks : links})
       })
       const response = await changeSocialLinks.json();
       stopLoading();
       closeModal();
       fetchActiveUser();
        if (response.success) {
          createAlert("success", response.message.split("#")[0])
          return ;
        }
        createAlert("error", response.message.split("#")[0])
    } catch (error) {
      stopLoading();
      closeModal();
      console.log("There is some error : ", error);
      createAlert("error", "Some error updating user profile");
    }
  }

  return (
    <CommonModalBox >
      <TextField
        className="pt-1 pb-1"
        fullWidth
        name="githubLink"
        value={links.githubLink}
        onChange={handleLinkChange}
        autoComplete="off"
        label="Github Profile link"
        variant="filled"
        placeholder="ex: https://github.com/..."
      />

      {/* --- Linked In ---- */}
      <TextField
        className="pt-1 pb-1"
        fullWidth
        name="linkedInLink"
        value={links.linkedInLink}
        onChange={handleLinkChange}
        autoComplete="off"
        // id="filled-error-helper-text"
        label="LinkedIn Profile link"
        variant="filled"
        placeholder="ex: https://www.linkedin.com/in/..."
      />

      <div className="mt-5 h-10 flex justify-center items-center ">
        {githubLink === links.githubLink &&
          linkedInLink === links.linkedInLink ? (
          <GeneralButton
            disabled={true}
            className="!bg-green-200 hover:!bg-green-200 cursor-not-allowed p-2"
            buttonText={"Save changes"}
          />
        ) : (
          <GeneralButton
            onClick={updateSocialLinks}
            className="!bg-green-500 hover:!bg-green-600 p-2"
            buttonText={"Save changes"}
          />
        )}
      </div>
    </CommonModalBox>
  );
};

export default EditSocialLinks;

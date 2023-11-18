import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import GeneralButton from "../common/GeneralButton";
import CommonModalBox from "./CommonModalBox";

const EditProfilePicture = ({ profilePic, name }) => {
  const { url } = profilePic;
  const [profileUrl, setProfileUrl] = useState("");
  const userName = name;
  // handle file input
  const handleFileInput = (e) => {
    // this will be helpful when user opens file window & cancels without selecting any file. Because if file is undefined & set it directly to react hook. It cause problem.
    if (e.target.files[0] != undefined) {
      console.log(typeof e.target.files[0]);
      const selectedFile = e.target.files[0];
      const fileSize = selectedFile.size; // Size in bytes
      const maxSize = 500 * 1024; // 500KB
      if (fileSize > maxSize) {
        setAlert({
          alert: true,
          alertType: "error",
          alertMessage:
            "File size exceeds 500KB. Please choose a smaller image.",
        });
      } else {
        // File is within size limit, set it in state
        setProfileUrl(e.target.files[0]);
      }
    }
  };

  // handle remove file image
  const handleRemovePic = () => {
    setProfileUrl("");
  };

  const handleDeletePic = () => {};

  return (
    <CommonModalBox className="flex flex-col items-center">
      {url !== "" ? (
        <Avatar alt={userName} src={url} sx={{ width: 200, height: 200 }} />
      ) : (
        <Avatar
          alt={userName}
          src={profileUrl !== "" ? `${URL.createObjectURL(profileUrl)}` : ""}
          sx={{ width: 200, height: 200 }}
        />
      )}

      <div className="h-8 mt-5">
        {/*  */}
        {profileUrl !== "" && (
          <p onClick={handleRemovePic} className="cursor-pointer">
            <CloseIcon
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                fontSize: "20px",
              }}
            />
            <span className="">Remove pic</span>
          </p>
        )}
        {url !== "" && (
         <GeneralButton className="!bg-red-600 p-2" >
          Delete Profile Pic
         </GeneralButton>
        )}
      </div>

      {/* {url !== "" && (
        <GeneralButton
          disabled={true}
          className="!bg-red-200 hover:!bg-red-200 p-2"
          buttonText={"Save changes"}
        />
      )} */}

      {url === "" &&
        <Button className="mt-3" variant="contained" component="label">
          {/* {url === "" ? "Choose Image" : "Change profile picture" }  */}
          Choose Image
          <input
            accept=".png, .jpg, .jpeg"
            onChange={handleFileInput}
            type="file"
            value={""}
            hidden
          />
        </Button> 
      }

      <div className="h-10 mt-5 flex justify-center items-center ">
        { url === "" && (profileUrl  === "" ? (
          <GeneralButton
            disabled={true}
            className="!bg-green-200 hover:!bg-green-200 cursor-not-allowed p-2"
            buttonText={"Save changes"}
          />
        ) : (
          <GeneralButton
            className="!bg-green-500 hover:!bg-green-600 p-2"
            buttonText={"Save changes"}
          >
            Save changes
            <input
              accept=".png, .jpg, .jpeg"
              onChange={handleFileInput}
              type="file"
              value={""}
              hidden
            />
          </GeneralButton>
        ))}
      </div>
    </CommonModalBox>
  );
};

export default EditProfilePicture;

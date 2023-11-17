import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import GeneralButton from "../common/GeneralButton";
import CommonModalBox from "./CommonModalBox";

const EditProfilePicture = ({ profilePic }) => {
  const { url } = profilePic;
  const [profileUrl, setProfileUrl] = useState(url);

  // handle file input
  const handleFileInput = (e) => {
    // this will be helpful when user opens file window & cancels without selecting any file. Because if file is undefined & set it directly to react hook. It cause problem.
    if (e.target.files[0] != undefined) {
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

  return (
    <CommonModalBox className="flex flex-col items-center">
      <Avatar
        alt={profileUrl === "" ? "" : ""}
        src={profileUrl != "" ? `${URL.createObjectURL(profileUrl)}` : ""}
        sx={{ width: 200, height: 200 }}
      />

      <div className="h-8">
        {profileUrl != "" && (
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
      </div>

      <Button className="mt-3" variant="contained" component="label">
        Choose picture
        <input
          accept=".png, .jpg, .jpeg"
          onChange={handleFileInput}
          type="file"
          value={""}
          hidden
        />
      </Button>

      <div className="h-10 mt-5 flex justify-center items-center ">
        {url === profileUrl ? (
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
        )}
      </div>
    </CommonModalBox>
  );
};

export default EditProfilePicture;

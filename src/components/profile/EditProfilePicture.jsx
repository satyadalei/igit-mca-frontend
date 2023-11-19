import { Avatar, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import GeneralButton from "../common/GeneralButton";
import CommonModalBox from "./CommonModalBox";
import randomString from "randomstring";
import { initializeApp } from "firebase/app";
import { getStorage, ref, deleteObject, uploadBytes, getDownloadURL, } from "firebase/storage";
import { firebaseConfig } from "../../../firebase/firebase"
import loadingAndAlertContext from "@/context/loadingAndAlert/loadingAndAlertContext";
import activeUserAndLoginStatus from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";


const EditProfilePicture = ({ profilePic, name, batchNum, closeModal }) => {
  const { url, givenName } = profilePic;

  const [profileUrl, setProfileUrl] = useState("");
  const userName = name;
  const batch = batchNum;
  const baseApi = process.env.NEXT_PUBLIC_BASE_URL;

  // ------ context API -----
  const { startLoading, createAlert, stopLoading } = useContext(loadingAndAlertContext);
  const { fetchActiveUser } = useContext(activeUserAndLoginStatus);

  // ----- local storage -----
  const token = localStorage.getItem("token");

  // ------ firebase ----------
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  // handle file input
  const handleFileInput = (e) => {
    // this will be helpful when user opens file window & cancels without selecting any file. Because if file is undefined & set it directly to react hook. It cause problem.
    if (e.target.files[0] != undefined) {
      const selectedFile = e.target.files[0];
      const fileSize = selectedFile.size; // Size in bytes
      const maxSize = 500 * 1024; // 500KB
      setProfileUrl(e.target.files[0]);
    }
  };

  // handle remove file image
  const handleRemovePic = () => {
    setProfileUrl("");
  };

  const handleDeleteImage = (imageRef, imageName) => {
    try {
      const deleteProfileImageRef = ref(storage, `images/profileImages/${batch}/${givenName}` // this place will be customized with imageRef & imageName
      );
      startLoading();
      deleteObject(deleteProfileImageRef)
        .then(async () => {
          // File deleted successfully :: call api to change data in database
          const url = `${baseApi}/api/user/editProfile/profilePicture`;
          const removeImage = await fetch(url, {
            method: "DELETE",
            headers: {
              token: token
            }
          })
          const response = await removeImage.json();
          fetchActiveUser();
          stopLoading();
          if (response.success) {
            createAlert("success", response.message.split("#")[0])
            // closeModal();
            return
          }
          closeModal();
          createAlert("error", response.message.split("#")[0])
        })
        .catch((error) => {
          closeModal();
          stopLoading();
          console.log("Error in deleting image", error);
          createAlert("error", "Some error updating profile")
        });
    } catch (error) {
      closeModal();
      stopLoading();
      console.log("There is some error : ", error);
      createAlert("error", "Some error updating profile");
    }
  };

  const handleUploadImage = async (imageRef, imageName) => {
    try {
      startLoading();
      const random_string = randomString.generate({
        length: 6,
        charset: "alphanumeric",
      });
      const url = `${baseApi}/api/user/editProfile/profilePicture`;
      const docGivenName = name.split(" ")[0] + "_" + new Date() + "_" + random_string;
      // const uploadImageRef = ref(storage, `images/profileImages/43/${docGivenName}`);
      const uploadImageRef = ref(storage, `images/profileImages/${batch}/${docGivenName}`);
      const file = profileUrl;
      const metaData = { contentType: profileUrl.type, };
      uploadBytes(uploadImageRef, file, metaData).then(async (snapshot) => {
        let userProfileUrl = await getDownloadURL(snapshot.ref);

        // ---- call api starts ---
        const updateProfile = await fetch(url, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
            'token': token
          },
          body: JSON.stringify({
            url: userProfileUrl,
            givenName: docGivenName
          })
        })
        const response = await updateProfile.json();
        stopLoading();
        closeModal();
        // ---- call api ends ---
        // Alert message
        fetchActiveUser();
        if (response.success) {
          createAlert("success", response.message.split("#")[0])
          return
        }

        createAlert("error", response.message.split("#")[0])
      }).catch((error) => {
        stopLoading();
        closeModal();
        console.log(error);
        createAlert("error", "Some error updating user profile");
      });
    } catch (error) {
      stopLoading();
      closeModal();
      console.log("There is some error : ", error);
      createAlert("error", "Some error updating user profile");
    }
  }




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
          <GeneralButton onClick={handleDeleteImage} className="!bg-red-600 p-2">
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

      {url === "" && (
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
      )}

      <div className="h-10 mt-5 flex justify-center items-center ">
        {url === "" &&
          (profileUrl === "" ? (
            <GeneralButton
              disabled={true}
              className="!bg-green-200 hover:!bg-green-200 cursor-not-allowed p-2"
              buttonText={"Save changes"}
            />
          ) : (
            <GeneralButton
              onClick={handleUploadImage}
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

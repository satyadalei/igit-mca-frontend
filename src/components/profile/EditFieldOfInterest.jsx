import React, { useState, useContext } from "react";
import CommonModalBox from "../modal/CommonModalBox";
import { MenuItem, TextField } from "@mui/material";
import { fieldOfInterest } from "../../app/registration/registrationform/formSelectOption";
import GeneralButton from "../common/GeneralButton";
import loadingAndAlertContext from "@/context/loadingAndAlert/loadingAndAlertContext";
import activeUserAndLoginStatus from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";


const EditFieldOfInterest = ({ interest, closeModal }) => {
  const [interestField, setInterestField] = useState(interest);
  const [otherInterest, setOtherInterest] = useState("");

  // --- API URL ---
  const baseApi = process.env.NEXT_PUBLIC_BASE_URL;
  // ------ context API -----
  const { startLoading, createAlert, stopLoading } = useContext(loadingAndAlertContext);
  const { fetchActiveUser } = useContext(activeUserAndLoginStatus);

  // ----- local storage -----
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setInterestField(e.target.value);
    setOtherInterest("");
  };
  const handleOtherInterest = (e)=>{
    setOtherInterest(e.target.value);
  }

  let allFieldOfInterest = fieldOfInterest ;
  let isFound = false;

  if (interest !== "nothing selected") {
    fieldOfInterest.forEach((interestItem, index)=>{
      if (interestItem === interestField) {
        isFound = true;
        return;
      }
      if ((index === fieldOfInterest.length - 1) && (isFound === false)) {
        allFieldOfInterest.push(interestField);
        allFieldOfInterest.sort();
      }
    }) 
  }

  const handleFieldOfInterestUpdate = async () => {
    try {
      startLoading();
      const url = `${baseApi}/api/user/editProfile/fieldOfInterest`;
      const changeInterest = await fetch(url, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'token': token
        },
        body: JSON.stringify({ fieldOfInterest: (interestField === "other" ? otherInterest : interestField ) })
      })
      const response = await changeInterest.json();
      stopLoading();
      closeModal();
      fetchActiveUser();
      if (response.success) {
        createAlert("success", response.message.split("#")[0])
        return;
      }
      createAlert("error", response.message.split("#")[0]);
    } catch (error) {
      stopLoading();
      closeModal();
      console.log("There is some error : ", error);
      createAlert("error", "Some error in updating user profile");
    }
  }

  return (
    <CommonModalBox>
      <TextField
        className="mb-5"
        name="fieldOfInterest"
        value={interestField}
        onChange={handleChange}
        select
        label="Field of interest"
        variant="filled"
        fullWidth
      >
        {interest === "nothing selected" &&
          <MenuItem value={"nothing selected"}>nothing selected</MenuItem>
        }
        {allFieldOfInterest.map((interest, index) => (
          <MenuItem style={{ zIndex: "1001" }} key={index} value={interest}>
            {interest}
          </MenuItem>
        ))}
        {/* <MenuItem value={"other"}>Other</MenuItem> */}
      </TextField>
      <div className="h-10 mb-10" >
        {
          interestField === "other" &&
          <>
            <TextField
              className=""
              name="otherInterest"
              value={otherInterest}
              onChange={handleOtherInterest}
              required
              fullWidth
              autoFocus={true}
              label="Field of Interest"
              variant="filled"
              placeholder="Write your other interest field here"
            />
          </>
        }
      </div>
      <div className="h-10 flex justify-center items-center ">
        {(interest === interestField && interest !== "other") || (interestField === "other" && otherInterest === "") ? (
          <GeneralButton
            disabled={true}
            className="!bg-green-200 hover:!bg-green-200 cursor-not-allowed p-2"
            buttonText={"Save changes"}
          />
        ) : (
          <GeneralButton
            onClick={handleFieldOfInterestUpdate}
            className="!bg-green-500 hover:!bg-green-600 p-2"
            buttonText={"Save changes"}
          />
        )}
      </div>
    </CommonModalBox>
  );
};

export default EditFieldOfInterest;

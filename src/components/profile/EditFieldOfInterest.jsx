import React, { useState } from "react";
import CommonModalBox from "./CommonModalBox";
import { MenuItem, TextField } from "@mui/material";
import { fieldOfInterest } from "../../app/registration/registrationform/formSelectOption";
import GeneralButton from "../common/GeneralButton";

const EditFieldOfInterest = ({ interest }) => {
  const [interestField, setInterestField] = useState(interest);

  const handleChange = (e) => {
    setInterestField(e.target.value);
  };
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
        <MenuItem value={"nothing selected"}>nothing selected</MenuItem>
        {fieldOfInterest.map((interest, index) => (
          <MenuItem style={{ zIndex: "1001" }} key={index} value={interest}>
            {interest}
          </MenuItem>
        ))}
        <MenuItem value={"other"}>Other</MenuItem>
      </TextField>

      <div className="h-10 flex justify-center items-center ">
        {interest === interestField ? (
          <GeneralButton
          disabled={true}
          className="!bg-green-200 hover:!bg-green-200 cursor-not-allowed p-2"
          buttonText={"Save changes"}
          />
        ) : (
          <GeneralButton
          className="!bg-green-500 hover:!bg-green-600 p-2"
          buttonText={"Save changes"}
          />
        )}
      </div>
    </CommonModalBox>
  );
};

export default EditFieldOfInterest;

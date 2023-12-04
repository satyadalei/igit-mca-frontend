"use client"
import React, { useContext, useState } from "react";
import { bachelorCourses } from "../../app/registration/registrationform/formSelectOption";
import { MenuItem, TextField } from "@mui/material";
import GeneralButton from "../common/GeneralButton";
import CommonModalBox from "../modal/CommonModalBox";
import loadingAndAlertContext from "@/context/loadingAndAlert/loadingAndAlertContext";
import activeUserAndLoginStatus from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";


const EditGraduation = ({ graduation, closeModal }) => {
  const [gradCourse, setGradCourse] = useState(graduation);
  const [otherGrad, setOtherGrad] = useState("");

  const handleChange = (e) => {
    setGradCourse(e.target.value);
  };

  const handleOtherGrad = (e)=>{
    setOtherGrad(e.target.value);
  }

  let allGradCourses = bachelorCourses;
  let isFound = false;

  if (graduation !== "nothing selected") {
    bachelorCourses.forEach((userGradCourse, index) => {
      if (graduation === userGradCourse) {
        isFound = true;
        return;
      }
      if ((index === bachelorCourses.length - 1) && (isFound === false)) {
        allGradCourses.push(gradCourse);
        allGradCourses.sort();
      }
    }) 
  }


  // --- API URL ---
  const baseApi = process.env.NEXT_PUBLIC_BASE_URL;
  // ------ context API -----
  const { startLoading, createAlert, stopLoading } = useContext(loadingAndAlertContext);
  const { fetchActiveUser } = useContext(activeUserAndLoginStatus);

  // ----- local storage -----
  const token = localStorage.getItem("token");

  const handleChangeGradCourse = async () => {
    try {
      startLoading();
      const url = `${baseApi}/api/user/editProfile/gradCourse`
      const changeGradCourse = await fetch(url, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'token': token
        },
        body: JSON.stringify({ gradCourse : gradCourse === "other" ? otherGrad : gradCourse })
      })
      const response = await changeGradCourse.json();
      stopLoading();
      closeModal();
      fetchActiveUser();
      if (response.success) {
        createAlert("success", response.message.split("#")[0])
        return;
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
    <CommonModalBox>
      <TextField
        className="mb-2"
        name="gradCourse"
        value={gradCourse}
        onChange={handleChange}
        fullWidth
        select
        label="Graduation course"
        variant="filled"
        required
      >
        {graduation === "nothing selected" &&
          <MenuItem value="nothing selected"> nothing selected </MenuItem>
        }
        {allGradCourses.map((course, index) => (
          <MenuItem style={{ zIndex: "8001" }} key={index} value={course}>
            {course}
          </MenuItem>
        ))}
      </TextField>
      <div className="h-10 mb-10" >
        {
          gradCourse === "other" &&
          <>
            <TextField
              className=""
              name="otherGrad"
              value={otherGrad}
              onChange={handleOtherGrad}
              autoFocus={true}
              required
              fullWidth
              label="Write your Graduation here"
              variant="filled"
              placeholder="B.Sc(Applied physics)"
            />
          </>
        }
      </div>
      <div className="h-10 mt-5 flex justify-center items-center ">
        {( (gradCourse === "other" && otherGrad === "") || (gradCourse === graduation && gradCourse != "other" ))  ? (
          <GeneralButton
            disabled={true}
            className="!bg-green-200 hover:!bg-green-200 cursor-not-allowed p-2"
            buttonText={"Save changes"}
          /> 
        ) : (
          <GeneralButton
            onClick={handleChangeGradCourse}
            className="!bg-green-500 hover:!bg-green-600 p-2"
            buttonText={"Save changes"}
          />
        )}
      </div>
    </CommonModalBox>
  );
};

export default EditGraduation;

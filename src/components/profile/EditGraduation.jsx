import React, { useContext, useState } from "react";
import { bachelorCourses } from "../../app/registration/registrationform/formSelectOption";
import { MenuItem, TextField } from "@mui/material";
import GeneralButton from "../common/GeneralButton";
import CommonModalBox from "../modal/CommonModalBox";
import loadingAndAlertContext from "@/context/loadingAndAlert/loadingAndAlertContext";
import activeUserAndLoginStatus from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";


const EditGraduation = ({ graduation, closeModal }) => {
  const [gradCourse, setGradCourse] = useState(graduation);
  const handleChange = (e) => {
    setGradCourse(e.target.value);
  };

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
      const changeGradCourse = await fetch(url,{
        method:"PUT",
        headers : {
          'Content-Type': 'application/json',
          'token': token
        },
        body : JSON.stringify({gradCourse})
       })
       const response = await changeGradCourse.json();
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
    <CommonModalBox>
      <TextField
        // id="outlined-select-currency"
        name="gradCourse"
        value={gradCourse}
        onChange={handleChange}
        style={{ margin: "0.5rem" }}
        fullWidth
        select
        label="Graduation course"
        variant="filled"
        required
      >
        {graduation === "nothing selected" && 
          <MenuItem value="nothing selected"> nothing selected </MenuItem>
        }
        {bachelorCourses.map((course, index) => (
          <MenuItem style={{ zIndex: "8001" }} key={index} value={course}>
            {course}
          </MenuItem>
        ))}
      </TextField>

      <div className="h-10 mt-5 flex justify-center items-center ">
        {gradCourse === graduation ? (
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
      {/* <div className='h-10 flex justify-center items-center ' >
        {gradCourse === graduation ? "" : <GeneralButton className="bg-green-500 hover:bg-green-600 p-2" buttonText={"Save changes"} />} 
      </div> */}
    </CommonModalBox>
  );
};

export default EditGraduation;

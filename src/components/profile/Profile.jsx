"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../../src/app/registration/registrationform/css/page.module.css";
import {
  Avatar,
  Button,
  TextField,
  Typography
} from "@mui/material";
import UserTypeForm from "../../app/registration/registrationform/UserTypeForm";
import activeUserAndLoginContext from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import loadingAndAlertContext from "@/context/loadingAndAlert/loadingAndAlertContext";
import Alert from "@/components/common/Alert";
import Loading from "@/components/common/Loading";
import EditOption from "./EditOption";
import ProfileEditModal from "../modal/ProfileEditModal";


const Profile = () => {
  const { activeUser, loginStatus, logOutUser, fetchActiveUser, setLoginStatus } = useContext(activeUserAndLoginContext);
  const { setLoading, setAlert, loading, alert } = useContext(
    loadingAndAlertContext
  );

  const { name, regNum, homeDist, mobile, gradCourse, socialLinks } = activeUser != null && activeUser.userDetails;
  const { batchNum, email, rollNum } = activeUser != null && activeUser;


  // registeringUser = 42 or 41
  // user = allDetails of user --> user.email is email id of user
  const router = useRouter();
  //user will automatically redirect if not done previous two step
  useEffect(() => {
    if (loginStatus === false) {
      router.push("/login")
    }
  }, [loginStatus]);


  const [modal, setModal] = useState(false); // to open & close modal
  const [modalType, setModalType] = useState(null);

  const closeModal = ()=>{
    setModal(false);
  } 
  const showModal = (modalType)=>{
    setModal(true);
    setModalType(modalType);
  }
 
  return (
    <>
      <section className="page_section min-h-screen">
        {activeUser != null && loginStatus === true ? (
          <>
            {/* ---- <Alert/> -----  */}
            {alert.alert && <Alert />}

            {/* ---- Loading -----  */}
            {loading && <Loading />}

            <div className={styles.registration_main_container}>

              {modal && <ProfileEditModal userDetails={activeUser} closeModal={closeModal} modalType={modalType} /> }

              {/* top heading of form */}
              <div className={styles.register_top_container}>
                <UserTypeForm
                  mainHeading={name}
                  subHeading={batchNum + " Batch"}
                />
              </div>

              {/* actual form inputs */}
              <div className={styles.form_input_container}>

                {/* --- BOX 3 --- */}
                <div className={`${styles.input_box} ${styles.input_box3}`}>
                  <Typography style={{ color: "#3584FC", textAlign: "center" }} >Profile Picture</Typography>
                  <div className={styles.upload_profile_pic_box}>
                    <div className={styles.profile_box}>
                      <Avatar
                        alt={
                          activeUser.profilePic.url === ""
                            ? ""
                            : activeUser.userDetails.name
                        }
                        src={activeUser.profilePic.url || ""}
                        sx={{ width: 250, height: 250 }}
                      />
                    </div>
                  </div>
                    <EditOption className="flex justify-center mt-5" onClick={()=>{showModal("profilePicture")}} editText={"Profile picture"} />
                </div>


                {/* Box 1 */}
                <div className={`${styles.input_box} ${styles.input_box1}`}>
                  {/* ---BATCH--- */}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem", marginLeft:"0" }}
                    name="batch"
                    fullWidth
                    // id="outlined-basic"
                    label="Batch"
                    variant="filled"
                    placeholder="ex: 42"
                    value={batchNum}
                    disabled
                  />
                  {/* ---EMAIL---- */}
                  <TextField
                    style={{ margin: "0.5rem", marginLeft:"0" }}
                    className={styles.input_field}
                    name="email"
                    fullWidth
                    // id="outlined-basic"
                    label="Email"
                    value={email}
                    variant="filled"
                    placeholder="ex: mca41@gmail.com"
                    disabled
                  />


                  {/* --- name --- */}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem", marginLeft:"0" }}
                    name="fName"
                    value={name}
                    required
                    fullWidth
                    // id="filled-error-helper-text"
                    label="First name"
                    variant="filled"
                    disabled
                  />

                  {/* --- Registration number --- */}
                  {/* <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    name="regNum"
                    fullWidth
                    label="Registration number"
                    variant="filled"
                    placeholder="ex: 2205105056"
                    value={regNum || ""}
                    disabled
                  /> */}

                  {/* --- Roll number --- */}
                  {/* <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    name="rollNum"
                    value={rollNum || ""}
                    fullWidth
                    // id="filled-error-helper-text"
                    label="Roll number"
                    variant="filled"
                    placeholder="ex: 50"
                    disabled
                  /> */}

                  {/* --- Home district --- */}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem", marginLeft:"0" }}
                    name="homeDist"
                    value={activeUser.userDetails.homeDist || ""}
                    fullWidth
                    label="Home district"
                    // defaultValue="no district"
                    variant="filled"
                    disabled
                  ></TextField>

                  {/* --- Graduation --- */}
                  <TextField
                    className={styles.input_field}
                    name="gradCourse"
                    value={activeUser.userDetails.gradCourse}
                    style={{ margin: "0.5rem", marginLeft:"0" }}
                    fullWidth
                    label="Graduation course"
                    variant="filled"
                    disabled
                  ></TextField>
                  <EditOption onClick={()=>{showModal("graduation")}} editText={"graduation"} />

                </div>

                {/* BOX 2 */}
                <div className={`${styles.input_box} ${styles.input_box2}`}>
                  {/* ---Mobile number ---- */}
                  {/* <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    fullWidth
                    name="mobile"
                    value={activeUser.userDetails.mobile || ""}
                    label="Mobile number"
                    variant="filled"
                    placeholder="ex: 814457XXXX"
                    disabled
                  /> */}


                  {/* ---Field of Interest ---- */}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem", marginLeft:"0" }}
                    name="fieldOfInterest"
                    value={activeUser.fieldOfInterest || ""}
                    label="Field of interest"
                    variant="filled"
                    disabled
                    fullWidth
                  ></TextField>
                  <EditOption onClick={()=>{showModal("fieldOfInterest")}} editText={"Field of interest"} />

                  {/* --- ANY TAG PROVIDED ---*/}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem", marginLeft:"0" }}
                    fullWidth
                    name="tag"
                    value={activeUser.tag || ""}
                    label="Any tag provided"
                    variant="filled"
                    disabled
                  ></TextField>
                  
                  {/* ------- SOCIAL LINKS -------- */}
                  <div>
                    <h4 className="text-sm text-gray-400">Social Links</h4>
                    {/* --- GITHUB --- */}
                    <TextField
                      className={styles.input_field}
                      fullWidth
                      name="githubLink"
                      style={{ margin: "0.5rem", marginLeft:"0" }}
                      value={
                        activeUser.userDetails.socialLinks.githubLink || ""
                      }
                      autoComplete="off"
                      // id="filled-error-helper-text"
                      label="Github Profile link"
                      variant="filled"
                      placeholder="ex: https://github.com/..."
                      disabled
                    />

                    {/* --- Linked In ---- */}
                    <TextField
                      className={styles.input_field}
                      fullWidth
                      style={{ margin: "0.5rem", marginLeft:"0" }}
                      name="linkedInLink"
                      value={
                        activeUser.userDetails.socialLinks.linkedInLink || ""
                      }
                      autoComplete="off"
                      // id="filled-error-helper-text"
                      label="LinkedIn Profile link"
                      variant="filled"
                      placeholder="ex: https://www.linkedin.com/in/..."
                      disabled
                    />
                    <EditOption onClick={()=>{showModal("socialLinks")}} editText={"social links"} />
                    {/* <Button
                      onClick={() => {
                        // logout option
                      }}
                      className={styles.submit_button}
                      variant="contained"
                      component="label"
                      style={{
                        backgroundColor: "green",
                        width: "auto",
                        height: "3rem",
                      }}
                    >
                      Save Profile Changes
                    </Button> */}

                  </div>
                </div>


              </div>

              {/* actual form inputs ends */}
              <div style={{ margin: "0.5rem", marginTop:"5rem" }}>
                <Button
                  onClick={() => {
                    // logout option
                    logOutUser()
                  }}
                  className={styles.submit_button}
                  variant="contained"
                  component="label"
                  style={{
                    backgroundColor: "red",
                    width: "200px",
                    height: "3rem",
                  }}
                >
                  Logout
                </Button>
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
};

export default Profile;

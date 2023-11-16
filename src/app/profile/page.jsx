"use client";
// eslint-disable-next-line react/no-unescaped-entities
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../registration/registrationform/css/page.module.css";
import {
  Avatar,
  Button,
  TextField,
  Typography
} from "@mui/material";
import UserTypeForm from "../registration/registrationform/UserTypeForm";
import activeUserAndLoginContext from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import loadingAndAlertContext from "@/context/loadingAndAlert/loadingAndAlertContext";
import Alert from "@/components/common/Alert";
import Loading from "@/components/common/Loading";

const Page = () => {
  const { activeUser, loginStatus,logOutUser, fetchActiveUser, setLoginStatus } = useContext(activeUserAndLoginContext);
  const { setLoading, setAlert, loading, alert } = useContext(
    loadingAndAlertContext
  );

  const {name, regNum, homeDist, mobile, gradCourse, socialLinks} = activeUser != null && activeUser.userDetails; 
  const {batchNum, email, rollNum} = activeUser != null && activeUser;
  

  // registeringUser = 42 or 41
  // user = allDetails of user --> user.email is email id of user
  const router = useRouter();
  console.log();
  //user will automatically redirect if not done previous two step
  useEffect(() => {
     if (loginStatus === false) {
        router.push("/login")
     }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginStatus]);

  

  return (
    <>
      <section className="page_section">
        {activeUser != null && loginStatus === true ? (
          <>
            {/* ---- <Alert/> -----  */}
            {alert.alert && <Alert />}

            {/* ---- Loading -----  */}
            {loading && <Loading />}

            <div className={styles.registration_main_container}>
              {/* top heading of form */}
              <div className={styles.register_top_container}>
                <UserTypeForm
                  mainHeading={name}
                  subHeading={batchNum + " Batch"}
                />
              </div>

              {/* actual form inputs */}
              <div className={styles.form_input_container}>
                {/* Box 1 */}
                <div className={`${styles.input_box} ${styles.input_box1}`}>
                  {/* ---BATCH--- */}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
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
                    style={{ margin: "0.5rem" }}
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

                  {/* --- Registration number --- */}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    name="regNum"
                    fullWidth
                    label="Registration number"
                    variant="filled"
                    placeholder="ex: 2205105056"
                    value={regNum || ""}
                    disabled
                  />

                  {/* --- Roll number --- */}
                  <TextField
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
                  />

                  {/* --- first name --- */}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    name="fName"
                    value={activeUser.userDetails.fName || ""}
                    fullWidth
                    // id="filled-error-helper-text"
                    label="First name"
                    variant="filled"
                    placeholder="ex: Aradhana"
                    disabled
                  />

                  {/* --- middle name --- */}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    name="mName"
                    value={activeUser.userDetails.mName || ""}
                    fullWidth
                    // id="filled-error-helper-text"
                    label="Middle name"
                    variant="filled"
                    placeholder="ex: Kumar"
                    disabled
                  />

                  {/* --- last name --- */}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    name="lName"
                    value={activeUser.userDetails.lName || ""}
                    fullWidth
                    autoComplete="off"
                    // id="filled-error-helper-text"
                    label="Last name"
                    variant="filled"
                    placeholder="ex: Das"
                    disabled
                  />

                  {/* --- Home district --- */}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    name="homeDist"
                    value={activeUser.userDetails.homeDist || ""}
                    fullWidth
                    label="Home district"
                    // defaultValue="no district"
                    variant="filled"
                    disabled
                  ></TextField>
                </div>

                {/* BOX 2 */}
                <div className={`${styles.input_box} ${styles.input_box2}`}>
                  {/* ---Mobile number ---- */}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    fullWidth
                    name="mobile"
                    value={activeUser.userDetails.mobile || ""}
                    label="Mobile number"
                    variant="filled"
                    placeholder="ex: 814457XXXX"
                    disabled
                  />
                  <TextField
                    className={styles.input_field}
                    name="fieldOfInterest"
                    value={activeUser.fieldOfInterest || ""}
                    style={{ margin: "0.5rem" }}
                    label="Field of interest"
                    variant="filled"
                    disabled
                    fullWidth
                  ></TextField>
                  {/* --- Graduation --- */}
                  <TextField
                    className={styles.input_field}
                    name="gradCourse"
                    value={activeUser.userDetails.gradCourse}
                    style={{ margin: "0.5rem" }}
                    fullWidth
                    label="Graduation course"
                    variant="filled"
                    disabled
                  ></TextField>

                  {/* --- ANY TAG PROVIDED ---*/}
                  <TextField
                    className={styles.input_field}
                    fullWidth
                    name="tag"
                    value={activeUser.tag || ""}
                    style={{ margin: "0.5rem" }}
                    label="Any tag provided"
                    variant="filled"
                    disabled
                  ></TextField>
                  {/* ------- SOCIAL LINKS -------- */}
                  <div>
                    <h4 className={styles.social_link_heading}>Social Links</h4>
                    {/* --- GITHUB --- */}
                    <TextField
                      className={styles.input_field}
                      fullWidth
                      name="githubLink"
                      value={
                        activeUser.userDetails.socialLinks.githubLink || ""
                      }
                      style={{ margin: "0.5rem" }}
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
                      name="linkedInLink"
                      value={
                        activeUser.userDetails.socialLinks.linkedInLink || ""
                      }
                      style={{ margin: "0.5rem" }}
                      autoComplete="off"
                      // id="filled-error-helper-text"
                      label="LinkedIn Profile link"
                      variant="filled"
                      placeholder="ex: https://www.linkedin.com/in/..."
                      disabled
                    />
                  </div>
                </div>

                {/* --- BOX 3 --- */}
                <div className={`${styles.input_box} ${styles.input_box3}`}>
                    <Typography style={{color:"#3584FC", textAlign:"center"}} >Profile Picture</Typography>
                  <div className={styles.upload_profile_pic_box}>
                    <div className={styles.profile_box}>
                      <Avatar
                        alt={
                          activeUser.profilePic.url === ""
                            ? ""
                            : activeUser.userDetails.fName
                        }
                        src={activeUser.profilePic.url || ""}
                        sx={{ width: 250, height: 250 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* actual form inputs ends */}
              <div style={{ margin: "0.5rem" }}>
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

export default Page;

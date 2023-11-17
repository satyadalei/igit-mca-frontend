"use client";
// eslint-disable-next-line react/no-unescaped-entities
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../../../components/common/Loading";
import styles from "./css/page.module.css";
import {
  Avatar,
  Button,
  Checkbox,
  FilledInput,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  sortedDistricts,
  fieldOfInterest,
  bachelorCourses,
  assignedTag,
} from "./formSelectOption";
import validateFormData from "./verifyFormData";
import RegistrationContext from "@/context/registration/registrationContext";
import loadingAndAlertContext from "@/context/loadingAndAlert/loadingAndAlertContext";
import Alert from "@/components/common/Alert";
import batchStates from "@/context/batch/batchContext";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const RegistrationForm = () => {
  const {
    registeringUser,
    setRegisteringUser,
    setUser,
    googleSignUp,
    user,
    registerNewUser,
  } = useContext(RegistrationContext);
  const { setLoading, setAlert, loading, alert } = useContext(
    loadingAndAlertContext
  );
  const { batchLists } = useContext(batchStates);
  // registeringUser = 42 or 41
  // user = allDetails of user --> user.email is email id of user
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const [isChecked, setIsChecked] = useState(false);
  const [details, setDetails] = useState({
    batch: "" ,
    email: "",

    password: "",
    regNum: "",
    rollNum: "",
    fullName: "",
    fName: "",
    mName: "",
    lName: "",
    homeDist: "",
    mobile: "",
    fieldOfInterest: "",
    gradCourse: "",

    // only for test

    // password: "satya123",
    // regNum: "2205105056",
    // rollNum: "56",
    // fName: "Satya",
    // mName: "",
    // lName: "Dalei",
    // homeDist: "Balasore",
    // mobile: "8147573354",
    // fieldOfInterest: "Systems Applications and Products",
    // gradCourse: "B.Sc(Mathematics)",

    // only for test

    tag: "",
    githubLink: "",
    linkedInLink: "",
    profilePic: "",
  });

  //user will automatically redirect if not done previous two step
  useEffect(() => {
    if (registeringUser === null || user === null) {
      router.push("/registration");
    } else {
      // set batch & email previously
      setDetails((prev) => {
        return { ...prev, batch: registeringUser, email: `${user.email}` };
      });
    }
  }, []);

  // handle onchange to modify form data
  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(details);
    setDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
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
        setDetails((prev) => {
          return {
            ...prev,
            profilePic: e.target.files[0],
          };
        });
      }
    }
  };
  // handle remove file image
  const handleRemovePic = () => {
    setDetails((prev) => {
      return {
        ...prev,
        profilePic: "",
      };
    });
  };
  //handle checkbox
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // handle submit
  const handleSubmit = (formData) => {
    const { error, message } = validateFormData(formData);
    if (error) {
      // credential error
      setAlert({
        alert: true,
        alertType: "warning",
        alertMessage: message,
      });
    } else {
      // is check box checked
      if (isChecked) {
        setLoading(true);
        //registerNewUser(formData)
        const resetDetails = registerNewUser(formData);

        if (resetDetails.resetDetails) {
          // set all to default values
          setIsChecked(false);
          setDetails(details);
        }
      } else {
        // Force user to agree to share personnel information
        setAlert({
          alert: true,
          alertType: "warning",
          alertMessage: "Please Agree to share you personal information!",
        });
      }
    }
  };

  return (
    <>
      <section className="page_section">
        {registeringUser != null && user != null ? (
          <>
            {/* ---- <Alert/> -----  */}
            {alert.alert && <Alert />}

            {/* ---- Loading -----  */}
            {loading && <Loading />}

            <div className={styles.registration_main_container}>
              {/* top heading of form */}
              <div className={styles.register_top_container}>
                <h5 className="text-sky-500 text-lg font-semibold">
                  Registration form.
                </h5>
              </div>

              {/* actual form inputs */}
              <div className={styles.form_input_container}>
                {/* Box 1 */}
                <div className={`${styles.input_box} ${styles.input_box1}`}>
                  {/* ---BATCH--- */}
                  {/* <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    name='batch'
                    onChange={handleChange}
                    fullWidth
                    required
                    // id="outlined-basic"
                    label="Batch"
                    value={details.batch}
                    variant="filled"
                    placeholder='ex: 42'
                    disabled
                  /> */}
                  <TextField
                    className={styles.input_field}
                    name="batch"
                    value={details.batch}
                    style={{ margin: "0.5rem" }}
                    onChange={handleChange}
                    select
                    label="Batch"
                    variant="filled"
                    fullWidth
                  >
                    {batchLists != null &&
                      batchLists.reverse().map((batch, index) => (
                        <MenuItem
                          style={{ zIndex: "1001" }}
                          key={index}
                          value={batch.batchNum.toString()}
                        >
                          {batch.batchNum}
                        </MenuItem>
                      ))}
                  </TextField>
                  {/* ---EMAIL---- */}
                  <TextField
                    style={{ margin: "0.5rem" }}
                    className={styles.input_field}
                    name="email"
                    onChange={handleChange}
                    required
                    fullWidth
                    label="Email"
                    value={details.email}
                    variant="filled"
                    placeholder="ex: mca41@gmail.com"
                    disabled
                  />
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    name="fullName"
                    value={details.fullName}
                    onChange={handleChange}
                    required
                    fullWidth
                    label="Full name"
                    variant="filled"
                    placeholder="ex: Aradhana Das"
                  />
                  {/* ---PASSWORD---- */}
                  <FormControl sx={{ m: 1, width: "25ch", width:"100%" }} 
                  className={styles.input_field}
                  variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">
                      Password
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-password"
                      type={showPassword ? "text" : "password"}
                      fullWidth
                      value={details.password}
                      name="password"
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>

                  {/* --- Registration number --- */}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    value={details.regNum}
                    type="number"
                    name="regNum"
                    onChange={handleChange}
                    fullWidth
                    // id="outlined-basic"
                    label="Registration number"
                    variant="filled"
                    placeholder="ex: 2205105056"
                  />

                  {/* --- Roll number --- */}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    name="rollNum"
                    value={details.rollNum}
                    onChange={handleChange}
                    type="number"
                    fullWidth
                    // id="filled-error-helper-text"
                    label="Roll number"
                    variant="filled"
                    placeholder="ex: 50"
                  />

                  {/* --- first name --- */}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    name="fName"
                    value={details.fName}
                    onChange={handleChange}
                    required
                    fullWidth
                    // id="filled-error-helper-text"
                    label="First name"
                    variant="filled"
                    placeholder="ex: Aradhana"
                  />

                  {/* --- middle name --- */}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    name="mName"
                    value={details.mName}
                    onChange={handleChange}
                    fullWidth
                    // id="filled-error-helper-text"
                    label="Middle name"
                    variant="filled"
                    placeholder="ex: Kumar"
                  />

                  {/* --- last name --- */}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    name="lName"
                    value={details.lName}
                    onChange={handleChange}
                    required
                    fullWidth
                    autoComplete="off"
                    // id="filled-error-helper-text"
                    label="Last name"
                    variant="filled"
                    placeholder="ex: Das"
                  />
                </div>

                {/* BOX 2 */}
                <div className={`${styles.input_box} ${styles.input_box2}`}>
                  {/* --- Home district --- */}
                  <TextField
                    // id="outlined-select-currency"
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    name="homeDist"
                    value={details.homeDist}
                    onChange={handleChange}
                    required
                    fullWidth
                    select
                    label="Home district"
                    // defaultValue="no district"
                    variant="filled"
                    helperText="To know classmates from same town"
                  >
                    {sortedDistricts.map((district, index) => (
                      <MenuItem
                        style={{ zIndex: "1001" }}
                        key={index}
                        value={district}
                      >
                        {district}
                      </MenuItem>
                    ))}
                  </TextField>

                  {/* ---Mobile number ---- */}
                  <TextField
                    className={styles.input_field}
                    style={{ margin: "0.5rem" }}
                    fullWidth
                    name="mobile"
                    type="number"
                    value={details.mobile}
                    onChange={handleChange}
                    autoComplete="off"
                    // id="filled-error-helper-text"
                    label="Mobile number"
                    variant="filled"
                    placeholder="ex: 814457XXXX"
                    helperText="To add you in group"
                    required
                  />
                  <TextField
                    // id="outlined-select-currency"
                    className={styles.input_field}
                    name="fieldOfInterest"
                    value={details.fieldOfInterest}
                    style={{ margin: "0.5rem" }}
                    onChange={handleChange}
                    select
                    label="Field of interest"
                    // defaultValue={"nothing selected"}
                    variant="filled"
                    fullWidth
                  >
                    {fieldOfInterest.map((interest, index) => (
                      <MenuItem
                        style={{ zIndex: "1001" }}
                        key={index}
                        value={interest}
                      >
                        {interest}
                      </MenuItem>
                    ))}
                    <MenuItem value={"other"}>Other</MenuItem>
                  </TextField>
                  {/* --- Graduation --- */}
                  <TextField
                    // id="outlined-select-currency"
                    className={styles.input_field}
                    name="gradCourse"
                    value={details.gradCourse}
                    onChange={handleChange}
                    style={{ margin: "0.5rem" }}
                    fullWidth
                    select
                    label="Graduation course"
                    // defaultValue={"no district"}
                    variant="filled"
                    required
                  >
                    {bachelorCourses.map((course, index) => (
                      <MenuItem
                        style={{ zIndex: "1001" }}
                        key={index}
                        value={course}
                      >
                        {course}
                      </MenuItem>
                    ))}
                  </TextField>

                  {/* --- ANY TAG PROVIDED ---*/}
                  {registeringUser === 41 && (
                    <>
                      <TextField
                        // id="outlined-select-currency"
                        className={styles.input_field}
                        fullWidth
                        name="tag"
                        value={details.tag}
                        onChange={handleChange}
                        style={{ margin: "0.5rem" }}
                        select
                        label="Any tag provided"
                        // defaultValue={"nothing selected"}
                        variant="filled"
                        helperText="You can left empty if nothing given"
                      >
                        {assignedTag.map((tagAssigned, index) => (
                          <MenuItem
                            style={{ zIndex: "1001" }}
                            key={index}
                            value={tagAssigned}
                          >
                            {tagAssigned}
                          </MenuItem>
                        ))}
                      </TextField>
                    </>
                  )}

                  {/* ------- SOCIAL LINKS -------- */}
                  <div>
                    <h4 className={styles.social_link_heading}>Social Links</h4>
                    {/* <p className={styles.upload_profile_pic_note} style={{ textAlign: "start", fontSize: "12px", marginLeft: "0.5rem" }}>You can edit later too</p> */}
                    {/* --- GITHUB --- */}
                    <TextField
                      className={styles.input_field}
                      fullWidth
                      name="githubLink"
                      value={details.githubLink}
                      onChange={handleChange}
                      style={{ margin: "0.5rem" }}
                      autoComplete="off"
                      // id="filled-error-helper-text"
                      label="Github Profile link"
                      variant="filled"
                      placeholder="ex: https://github.com/..."
                    />

                    {/* --- Linked In ---- */}
                    <TextField
                      className={styles.input_field}
                      fullWidth
                      name="linkedInLink"
                      value={details.linkedInLink}
                      onChange={handleChange}
                      style={{ margin: "0.5rem" }}
                      autoComplete="off"
                      // id="filled-error-helper-text"
                      label="LinkedIn Profile link"
                      variant="filled"
                      placeholder="ex: https://www.linkedin.com/in/..."
                    />
                  </div>
                </div>

                {/* --- BOX 3 --- */}
                <div className={`${styles.input_box} ${styles.input_box3}`}>
                  <h1 className={styles.upload_profile_pic_heading}>
                    Upload profile picture
                  </h1>
                  {/* <p className={styles.upload_profile_pic_note} >You can edit later too</p> */}
                  <div className={styles.upload_profile_pic_box}>
                    <div className={styles.profile_box}>
                      <Avatar
                        // alt={details.profilePic === "" ? "" : ""}
                        src={
                          details.profilePic != ""
                            ? `${URL.createObjectURL(details.profilePic)}`
                            : ""
                        }
                        sx={{ width: 250, height: 250 }}
                      />
                    </div>
                    {details.profilePic != "" && (
                      <>
                        <p
                          onClick={handleRemovePic}
                          className={styles.remove_profile_pic}
                        >
                          <CloseIcon
                            style={{
                              backgroundColor: "red",
                              color: "white",
                              borderRadius: "50%",
                              fontSize: "20px",
                            }}
                          />
                          <span
                            className={styles.remove_profile_pic_remove_text}
                          >
                            Remove pic
                          </span>
                        </p>
                      </>
                    )}
                    <Button
                      className={styles.chose_file_btn}
                      variant="contained"
                      component="label"
                    >
                      Choose picture
                      <input
                        accept=".png, .jpg, .jpeg"
                        onChange={handleFileInput}
                        type="file"
                        value={""}
                        hidden
                      />
                    </Button>
                    <p
                      className={styles.supported_files}
                      style={{ textAlign: "center", fontSize: "0.7rem" }}
                    >
                      Supported files are .PNG, .JPEG, .JPG & maximum size :
                      500KB
                    </p>
                    <p className={styles.note_for_pic}>
                      <span style={{ color: "red" }}>Note</span> : Please upload
                      a professional & recent picture so your classmates & other
                      can recognize easily.
                    </p>
                  </div>
                </div>
              </div>

              {/* actual form inputs ends */}
              <div style={{ margin: "0.5rem" }}>
                <FormControlLabel
                  required
                  control={
                    <Checkbox
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="I agree!"
                />
                <Typography>
                  My personnel information such as name, mobile number & other
                  details are going to be used within our department circle only
                  for better coordination purpose & some of {"information's"}{" "}
                  such as name & field of interest will displayed on igit-MCA
                  website.
                </Typography>
                <br />
                <Button
                  onClick={() => {
                    handleSubmit(details);
                  }}
                  className={styles.submit_button}
                  variant="contained"
                  component="label"
                  style={{
                    backgroundColor: "green",
                    width: "200px",
                    height: "3rem",
                  }}
                >
                  Register
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

export default RegistrationForm;

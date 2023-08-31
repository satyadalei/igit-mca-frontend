"use client"
// eslint-disable-next-line react/no-unescaped-entities
import React, { useContext, useEffect, useState } from 'react'
import RegistrationContext from "@/context/registration/registrationContext";
import { useRouter } from 'next/navigation'
import Loading from "../../../components/common/Loading"
import styles from "./css/registrationform.module.css"
import { Avatar, Button, Checkbox, FormControlLabel, MenuItem, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { sortedDistricts, fieldOfInterest, bachelorCourses, assignedTag } from "./formSelectOption"
import UserTypeForm from "./UserTypeForm"
import validateFormData from "./verifyFormData"
import loadingAndAlertContext from "@/context/loadingAndAlert/loadingAndAlertContext";
import Alert from '@/components/common/Alert';









const RegistrationForm = () => {

  // const registrationContext = useContext(RegistrationContext);
  const { registeringUser, googleSignUp, user, registerNewUser } = useContext(RegistrationContext);
  const { setLoading, setAlert, loading, alert } = useContext(loadingAndAlertContext);

  // registeringUser = 42 or 41
  // user = allDetails of user --> user.email is email id of user
  const router = useRouter();


  const [isChecked, setIsChecked] = useState(false);
  const [details, setDetails] = useState({
    batch: "",
    email: "",
    // password: "satya123",
    password: "",
    // regNum: "2205105056",
    regNum: "",
    // rollNum: "56",
    rollNum: "",
    // fName: "Satya",
    fName: "",
    // lName: "Dalei",
    lName: "",
    // homeDist: "Balasore",
    homeDist: "",
    // mobile: "8147573354",
    mobile: "",
    // fieldOfInterest: "Systems Applications and Products",
    fieldOfInterest: "",
    // gradCourse: "B.Sc(Mathematics)",
    gradCourse: "",
    tag: "",
    githubLink: "",
    linkedInLink: "",
    profilePic: "",
  })

  //user will automatically redirect if not done previous two step
  useEffect(() => {
    if (registeringUser === null || user === null) {
      router.push("/registration")
    } else {
      // set batch & email previously
      setDetails((prev) => {
        return { ...prev, batch: registeringUser, email: `${user.email}` }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // handle onchange to modify form data
  const handleChange = (e) => {
    console.log(details);
    setDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  // handle file input 
  const handleFileInput = (e)=>{
    // this will be helpful when user opens file window & cancels without selecting any file. Because if file is undefined & set it directly to react hook. It cause problem. 
    if (e.target.files[0] != undefined) {
      setDetails((prev)=>{
        return {
          ...prev,profilePic : e.target.files[0]
        }
      })
    }
  }
  // handle remove file image
  const handleRemovePic = ()=>{
    setDetails((prev)=>{
      return {
        ...prev,profilePic : ""
      }
    })
  }
  //handle checkbox
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // handle submit 
  const handleSubmit = (formData) => {
    const { error, message } = validateFormData(formData)
    if (error) {
      // credential error
      setAlert({
        alert: true,
        alertType: "warning",
        alertMessage: message
      })
    } else {
      // is check box checked
      if (isChecked) {
        setLoading(true)
       const resetDetails =  registerNewUser(formData)
       if (resetDetails != null) {
        setDetails(details);
        setIsChecked(false)
       }
      } else {
        // Force user to agree to share personnel information
        setAlert({
          alert: true,
          alertType: "warning",
          alertMessage: "Please Agree to share you personal information!"
        })
      }
    }
  }


  return (
    <>
      <section className='page_section' >
        {(registeringUser != null && user != null) ?
          <>


            {/* ---- <Alert/> -----  */}
            {alert.alert && <Alert />}
            
            {/* ---- Loading -----  */}
            {loading && <Loading/>}


            <div className={styles.registration_main_container} >
              {/* top heading of form */}
              <div className={styles.register_top_container} >
                {registeringUser === 41
                  ?
                  <UserTypeForm mainHeading={"41 batch (2022-24)"} subHeading={"2nd year registration form"} />
                  :
                  <UserTypeForm mainHeading={"42 batch (2023-25)"} subHeading={"1st year registration form"} />
                }
              </div>

              {/* actual form inputs */}
              <div className={styles.form_input_container} >

                {/* Box 1 */}
                <div className={`${styles.input_box} ${styles.input_box1}`} >

                  {/* ---BATCH--- */}
                  <TextField
                    className={styles.input_field}
                    styles={{ margin: "0.5rem" }}
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
                  />
                  {/* ---EMAIL---- */}
                  <TextField
                    styles={{ margin: "0.5rem" }}
                    className={styles.input_field}
                    name='email'
                    onChange={handleChange}
                    required
                    fullWidth
                    // id="outlined-basic"
                    label="Email"
                    value={details.email}
                    variant="filled"
                    placeholder='ex: mca41@gmail.com'
                    disabled
                  />
                  {/* ---PASSWORD---- */}
                  <TextField
                    styles={{ margin: "0.5rem" }}
                    className={styles.input_field}
                    name='password'
                    onChange={handleChange}
                    label="Password"
                    type="password"
                    required
                    fullWidth
                    // id="outlined-basic"
                    value={details.password}
                    variant="filled"
                    helperText="At least 5 characters"
                  />

                  {/* --- Registration number --- */}
                  {registeringUser === 41 &&
                    <>
                      <TextField
                        className={styles.input_field}
                        styles={{ margin: "0.5rem" }}
                        value={details.regNum}
                        name='regNum'
                        onChange={handleChange}
                        required
                        fullWidth
                        // id="outlined-basic"
                        label="Registration number"
                        variant="filled"
                        placeholder='ex: 2205105056'
                      />
                    </>
                  }

                  {/* --- Roll number --- */}
                  <TextField
                    className={styles.input_field}
                    styles={{ margin: "0.5rem" }}
                    name='rollNum'
                    value={details.rollNum}
                    onChange={handleChange}
                    required
                    fullWidth
                    // id="filled-error-helper-text"
                    label="Roll number"
                    variant="filled"
                    placeholder='ex: 50'
                  />

                  {/* --- first name --- */}
                  <TextField
                    className={styles.input_field}
                    styles={{ margin: "0.5rem" }}
                    name='fName'
                    value={details.fName}
                    onChange={handleChange}
                    required
                    fullWidth
                    // id="filled-error-helper-text"
                    label="First name"
                    variant="filled"
                    placeholder='ex: Aradhana'
                  />

                  {/* --- last name --- */}
                  <TextField
                    className={styles.input_field}
                    styles={{ margin: "0.5rem" }}
                    name='lName'
                    value={details.lName}
                    onChange={handleChange}
                    required
                    fullWidth
                    autoComplete='off'
                    // id="filled-error-helper-text"
                    label="Last name"
                    variant="filled"
                    placeholder='ex: Das'
                  />

                  {/* --- Home district --- */}
                  <TextField
                    // id="outlined-select-currency"
                    className={styles.input_field}
                    styles={{ margin: "0.5rem" }}
                    name='homeDist'
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
                      <MenuItem style={{ zIndex: "1001" }} key={index} value={district}>
                        {district}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

                {/* BOX 2 */}
                <div className={`${styles.input_box} ${styles.input_box2}`} >
                  {/* ---Mobile number ---- */}
                  <TextField
                    className={styles.input_field}
                    styles={{ margin: "0.5rem" }}
                    fullWidth
                    name='mobile'
                    value={details.mobile}
                    onChange={handleChange}
                    autoComplete='off'
                    // id="filled-error-helper-text"
                    label="Mobile number"
                    variant="filled"
                    placeholder='ex: 814457XXXX'
                    helperText="To add you in group"
                  />
                  {registeringUser === 41 &&
                    <>
                      <TextField
                        // id="outlined-select-currency"
                        className={styles.input_field}
                        name='fieldOfInterest'
                        value={details.fieldOfInterest}
                        styles={{ margin: "0.5rem" }}
                        onChange={handleChange}
                        required
                        select
                        label="Field of interest"
                        // defaultValue={"nothing selected"}
                        variant="filled"
                        fullWidth
                      >
                        {fieldOfInterest.map((interest, index) => (
                          <MenuItem style={{ zIndex: "1001" }} key={index} value={interest}>
                            {interest}
                          </MenuItem>
                        ))}
                        <MenuItem value={"other"} >Other</MenuItem>
                      </TextField>
                    </>}
                  {/* --- Graduation --- */}
                  <TextField
                    // id="outlined-select-currency"
                    className={styles.input_field}
                    name='gradCourse'
                    value={details.gradCourse}
                    onChange={handleChange}
                    styles={{ margin: "0.5rem" }}
                    fullWidth
                    select
                    label="Graduation course"
                    // defaultValue={"no district"}
                    variant="filled"
                  >
                    {bachelorCourses.map((course, index) => (
                      <MenuItem style={{ zIndex: "1001" }} key={index} value={course}>
                        {course}
                      </MenuItem>
                    ))}
                  </TextField>

                  {/* --- ANY TAG PROVIDED ---*/}
                  {registeringUser === 41 &&
                    <>
                      <TextField
                        // id="outlined-select-currency"
                        className={styles.input_field}
                        fullWidth
                        name='tag'
                        value={details.tag}
                        onChange={handleChange}
                        styles={{ margin: "0.5rem" }}
                        select
                        label="Any tag provided"
                        // defaultValue={"nothing selected"}
                        variant="filled"
                        helperText="You can left empty if nothing given"
                      >
                        {assignedTag.map((tagAssigned, index) => (
                          <MenuItem style={{ zIndex: "1001" }} key={index} value={tagAssigned}>
                            {tagAssigned}
                          </MenuItem>
                        ))}
                      </TextField>
                    </>
                  }

                  {/* ------- SOCIAL LINKS -------- */}
                  <div>
                    <h4 className={styles.social_link_heading} >Social Links</h4>
                    <p className={styles.upload_profile_pic_note} style={{textAlign:"start", fontSize:"12px",marginLeft:"0.5rem"}}>You can edit later too</p>
                    {/* --- GITHUB --- */}
                    <TextField
                      className={styles.input_field}
                      fullWidth
                      name='githubLink'
                      value={details.githubLink}
                      onChange={handleChange}
                      styles={{ margin: "0.5rem" }}
                      autoComplete='off'
                      // id="filled-error-helper-text"
                      label="Github Profile link"
                      variant="filled"
                      placeholder='ex: https://github.com/...'
                    />

                    {/* --- Linked In ---- */}
                    <TextField
                      className={styles.input_field}
                      fullWidth
                      name='linkedInLink'
                      value={details.linkedInLink}
                      onChange={handleChange}
                      styles={{ margin: "0.5rem" }}
                      autoComplete='off'
                      // id="filled-error-helper-text"
                      label="LinkedIn Profile link"
                      variant="filled"
                      placeholder='ex: https://www.linkedin.com/in/...'
                    />

                  </div>

                </div>

                {/* --- BOX 3 --- */}
                <div className={`${styles.input_box} ${styles.input_box3}`} >
                  <h1 className={styles.upload_profile_pic_heading} >Upload profile picture</h1>
                  <p className={styles.upload_profile_pic_note} >You can edit later too</p>
                  <div className={styles.upload_profile_pic_box} >
                    <div className={styles.profile_box} >
                      <Avatar
                        // alt={details.profilePic === "" ? "" : ""}
                        src={details.profilePic != "" ? `${URL.createObjectURL(details.profilePic)}` : ""}
                        sx={{ width: 250, height: 250 }}
                      />
                    </div>
                    {details.profilePic != "" &&
                      <>
                        <p onClick={handleRemovePic} className={styles.remove_profile_pic} ><CloseIcon style={{ backgroundColor: "red", color: "white", borderRadius: "50%", fontSize: "20px" }} />
                          <span className={styles.remove_profile_pic_remove_text} >Remove pic</span>
                        </p>
                      </>
                    }
                    <Button
                      className={styles.chose_file_btn}
                      variant="contained"
                      component="label"
                    >
                      Choose picture
                      <input
                        accept='image/png, image/jpeg'
                        onChange={handleFileInput}
                        type="file"
                        hidden
                      />
                    </Button>
                    <p className={styles.supported_files} >
                      Supported files are .PNG, .JPEG, .JPG & maximum size : 300KB
                    </p>
                    <p className={styles.note_for_pic} >
                      <span>Note</span> : If possible upload a professional & recent picture so others can recognize easily.
                    </p>
                  </div>
                </div>
              </div>

              {/* actual form inputs ends */}
              <div style={{margin:"0.5rem"}}>
                <FormControlLabel required control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />} label="I agree!" />
                <Typography  >
                  My personnel information such as name, mobile number & other details are going to be used within our department circle only for better coordination purpose & some of {"information's"} such as name & field of interest will displayed on igit-MCA website.
                </Typography>
                <br />
                <Button onClick={() => { handleSubmit(details) }} className={styles.submit_button} variant="contained"
                  component="label" style={{ backgroundColor: "green", width: "200px", height: "3rem" }} >
                  Submit
                </Button>
              </div>
            </div>
          </>
          :
          <Loading />
        }
      </section>
    </>
  )
}

export default RegistrationForm
"use client"
import React, { useContext, useEffect } from 'react'
import RegistrationContext from "@/context/registration/registrationContext";
import { useRouter } from 'next/navigation'
import Loading from "../../../components/common/Loding"
import styles from "./css/registartionform.module.css"
import { Avatar, Button, Checkbox, FormControlLabel, MenuItem, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const RegistrationForm = () => {

  const registrationContext = useContext(RegistrationContext);
  const { registeringUser, googleSignUp, user } = registrationContext;
  const router = useRouter();
  const districts = [
    'Angul', 'Balangir', 'Bargarh', 'Deogarh', 'Dhenkanal', 'Jharsuguda',
    'Kendujhar', 'Sambalpur', 'Subarnapur (Sonepur)', 'Sundargarh', 'Balasore', 'Bhadrak',
    'Cuttack', 'Jagatsinghpur', 'Jajpur', 'Kendrapada', 'Khordha', 'Mayurbhanj',
    'Nayagarh', 'Puri', 'Boudh', 'Gajapati', 'Ganjam', 'Kalahandi', 'Kandhamal',
    'Koraput', 'Malkangiri', 'Nabarangpur', 'Nuapada', 'Rayagada', "other"
  ];
  const sortedDistricts = districts.sort();
  const bachelorCourses = [
    "B.Sc(Physics)",
    "B.Sc(Chemistry)",
    "B.Sc(Mathematics)",
    "B.Sc(Biology)",
    "B.Sc(Statistics)",
    "B.Sc(Computer Science)",
    "BCA",
    "other"
  ].sort();
  const fieldOfInterest = [
    "Data Analytics/Science",
    "Advanced Business Application Programming",
    "Systems Applications and Products",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Full-Stack Web Dev",
    "App Development",
    "Cloud Computing",
    "Internet of Things",
    "Cyber Security",
    "UI/UX Designer",
  ].sort()
  const assignedTag = [
    "CR/BR",
    "Student Secretary",
    "Cultural Secretary",
    "Mycomp Secretary",
    "Placement Secretary",
    "Fund Secretary",
    "Sports Secretary",
    "Library Secretary",
  ].sort()
  // useEffect(()=>{
  //   if (registeringUser === null || user === null) {
  //     router.push("/registration")
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[])

  return (
    <>
      <section className='page_section' >
        {(registeringUser != null || user != null || registeringUser === null) ?
          <>
            <div className={styles.registration_main_container} >
              {/* top heading of form */}
              <div className={styles.register_top_container} >
                <h1>I am registration form page</h1>
                <p>Registration form</p>
              </div>

              {/* actual form inputs */}
              <div className={styles.form_input_container} >

                {/* Box 1 */}
                <div className={`${styles.input_box} ${styles.input_box1}`} >
                  {/* ---EMAIL---- */}
                  <TextField
                    className={styles.input_field}
                    name='email'
                    required
                    fullWidth
                    id="outlined-basic"
                    label="Email"
                    value={"someone@gmail.com"}
                    variant="filled"
                    placeholder='ex: mca41@gmail.com'
                    disabled
                  />
                  {/* ---BATCH--- */}
                  <TextField
                    className={styles.input_field}
                    name='batch'
                    fullWidth
                    required
                    id="outlined-basic"
                    label="Batch"
                    value={42}
                    variant="filled"
                    placeholder='ex: 42'
                    disabled
                  />
                  {/* --- Registration number --- */}
                  <TextField
                    className={styles.input_field}
                    name='registrationNumber'
                    required
                    fullWidth
                    id="outlined-basic"
                    label="Registration number"
                    variant="filled"
                    placeholder='ex: 2205105056'
                  />

                  {/* --- Roll number --- */}
                  <TextField
                    className={styles.input_field}
                    name='rollNumber'
                    required
                    fullWidth
                    id="filled-error-helper-text"
                    label="Roll number"
                    variant="filled"
                    placeholder='ex: 50'
                  />

                  {/* --- first name --- */}
                  <TextField
                    className={styles.input_field}
                    name='firstName'
                    required
                    fullWidth
                    id="filled-error-helper-text"
                    label="First name"
                    variant="filled"
                    placeholder='ex: Aradhana'
                  />

                  {/* --- last name --- */}
                  <TextField
                    className={styles.input_field}
                    name='lastName'
                    required
                    fullWidth
                    autoComplete='off'
                    id="filled-error-helper-text"
                    label="Last name"
                    variant="filled"
                    placeholder='ex: Das'
                  />

                  {/* --- Home district --- */}
                  <TextField
                    id="outlined-select-currency"
                    className={styles.input_field}
                    name='district'
                    required
                    fullWidth
                    select
                    label="Home district"
                    defaultValue="no district"
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
                    fullWidth
                    name='MobileNum'
                    autoComplete='off'
                    id="filled-error-helper-text"
                    label="Mobile number"
                    variant="filled"
                    placeholder='ex: 814457XXXX'
                    helperText="To add you in group"
                  />
                  <TextField
                    id="outlined-select-currency"
                    className={styles.input_field}
                    name='interestField'
                    required
                    select
                    label="Field of interest"
                    defaultValue={"nothing selected"}
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
                  <div>
                    <h4 className={styles.social_link_heading} >Social Links</h4>
                    {/* --- GITHUB --- */}
                    <TextField
                      className={styles.input_field}
                      fullWidth
                      name='githubLink'
                      autoComplete='off'
                      id="filled-error-helper-text"
                      label="Github Profile link"
                      variant="filled"
                      placeholder='ex: https://github.com/...'
                    />

                    {/* --- Linked In ---- */}
                    <TextField
                      className={styles.input_field}
                      fullWidth
                      name='linkedInLink'
                      autoComplete='off'
                      id="filled-error-helper-text"
                      label="LinkedIn Profile link"
                      variant="filled"
                      placeholder='ex: https://www.linkedin.com/in/...'
                    />

                  </div>
                  {/* --- Graduation --- */}
                  <TextField
                    id="outlined-select-currency"
                    className={styles.input_field}
                    fullWidth
                    name='graduation'
                    select
                    label="Graduation course"
                    defaultValue={"no district"}
                    variant="filled"
                  >
                    {bachelorCourses.map((course, index) => (
                      <MenuItem style={{ zIndex: "1001" }} key={index} value={course}>
                        {course}
                      </MenuItem>
                    ))}
                  </TextField>

                  {/* --- ANY TAG PROVIDED ---*/}
                  <TextField
                    id="outlined-select-currency"
                    className={styles.input_field}
                    fullWidth
                    name='tag'
                    select
                    label="Any tag provided"
                    defaultValue={"nothing selected"}
                    variant="filled"
                  >
                    {assignedTag.map((tagAssigned, index) => (
                      <MenuItem style={{ zIndex: "1001" }} key={index} value={tagAssigned}>
                        {tagAssigned}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

                {/* --- BOX 3 --- */}
                <div className={`${styles.input_box} ${styles.input_box3}`} >
                  <h1 className={styles.upload_profile_pic_heading} >Upload profile picture</h1>
                  <p className={styles.upload_profile_pic_note} >You can edit later too</p>
                  <div className={styles.upload_profile_pic_box} >
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                          sx={{ width: 250, height: 250 }}
                        />
                        <p className={styles.remove_profile_pic} ><CloseIcon style={{backgroundColor:"red", color:"white",borderRadius:"50%",fontSize:"20px"}} />
                          <span className={styles.remove_profile_pic_remove_text} >Remove pic</span>
                        </p>
                    <Button
                      className={styles.chose_file_btn}
                      variant="contained"
                      component="label"
                    >
                      Choose picture
                      <input
                        type="file"
                        hidden
                      />
                    </Button>
                    <p className={styles.supported_files} >
                      Supported files are .PNG, .JPEG, .JPG
                    </p>
                    <p className={styles.note_for_pic} >
                      <span>Note</span> : If possible upload a professional & recent picture so others can recognize easily.
                    </p>
                  </div>
                </div>
              </div>

              {/* actual form inputs ends */}
              <div>
                <FormControlLabel required control={<Checkbox />} label="I am aware that my information's such as name, mobile & other details are going to be used within our department circle for everybody's beneficial purpose." /> <br />
                <Button className={styles.submit_button} variant="contained"
                      component="label" style={{backgroundColor:"green", width:"200px", height:"3rem"}} >
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
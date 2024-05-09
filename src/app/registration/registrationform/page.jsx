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
import UserTypeForm from "./UserTypeForm";
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
  // console.log(batchLists);
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
    batch: "No batch selected",
    email: "",
    password: "",
    fullName: "",
    homeDist: "No district selected",
  });

  //user will automatically redirect if not done previous two step
  useEffect(() => {
    if (user === null) {
      router.push("/registration");
    } else {
      setDetails((prev) => {
        return { ...prev, email: `${user.email}` };
      });
    }
  }, [user]);

  // handle onchange to modify form data
  const handleChange = (e) => {
    setDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
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
        {user != null ? (
          <>
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
                    <MenuItem
                      style={{ zIndex: "1001" }}
                      value={"No batch selected"}
                    >
                      No batch selected
                    </MenuItem>
                    {batchLists != null &&
                      batchLists.reverse().map((batch, index) => (
                        <MenuItem
                          style={{ zIndex: "1001" }}
                          key={index}
                          value={batch.batchNum}
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
                  {/* ---- Full name ---- */}
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
                    placeholder="Your name"
                  />
                  {/* ---PASSWORD---- */}
                  <FormControl
                    sx={{ m: 1, width: "25ch", width: "100%" }}
                    className={styles.input_field}
                    variant="filled"
                  >
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

                  {/* --- Home district --- */}
                  <TextField
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
                    <MenuItem  style={{ zIndex: "1001" }} value="No district selected">No district selected</MenuItem>
                    {sortedDistricts.map((district, index) => (
                      <MenuItem
                        style={{ zIndex: "1001" }}
                        key={index}
                        value={district}
                      >
                        {district}
                      </MenuItem>
                    ))}
                    <MenuItem  style={{ zIndex: "1001" }} value="outer state">Outer state</MenuItem>
                    
                  </TextField>
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
                 I am aware that I am registering to the IGIT-MCA community website which is completely managed by only MCA students. It is not linked to IGIT College or CSEA department officially.
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

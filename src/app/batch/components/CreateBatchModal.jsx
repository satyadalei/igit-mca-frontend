"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import styles from "./Card.module.css";
import { useState, useEffect, useContext } from "react";
import verify from "./verifyCreateBatchFormData";
import loadingAndAlertContext from "@/context/loadingAndAlert/loadingAndAlertContext";
import Loading from "@/components/common/Loading";
import verifyCreateBatchData from "./verifyCreateBatchFormData"
import GeneralButton from "@/components/common/GeneralButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  //   border: "2px solid red",
  boxShadow: 24,
  p: 4,
  maxWidth: "400px",
};

export default function BasicModal(props) {
  const { loading, setLoading, alert, setAlert } = useContext(
    loadingAndAlertContext
  );

  const [batch, setBatch] = useState({
    batchNum: "",
    strength: "",
    startingYear: "",
    endingYear: "",
  });
  const handleChange = (e) => {
    setBatch((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const handleCreateNewBranch = async () => {
    //first also form verify details
    const isValid = verifyCreateBatchData(batch)
    if (isValid.error) {
        setAlert({
            alert: true,
            alertType: "error",
            alertMessage: isValid.message,
          });
        //   props.handleClose();
    }else{
        // no error call api
        setLoading(true);
        const token = localStorage.getItem("token");
        const url = `${baseUrl}/api/batch/createNewBatch`;
        const createNewBatch = await fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            token: token,
          },
          body: JSON.stringify(batch),
        });
        const response = await createNewBatch.json();
        if (response.success) {
          setLoading(false);
          setAlert({
            alert: true,
            alertType: "success",
            alertMessage: response.message,
          });
          props.handleClose();
          props.fetchAllBatch();
          // fetch all branch & populate branch page
        } else {
          setLoading(false);
          setAlert({
            alert: true,
            alertType: "error",
            alertMessage: response.message,
          });
          props.handleClose();
        }
    }
  };
  useEffect(() => {
    setBatch({
      batchNum: "",
      strength: "",
      startingYear: "",
      endingYear: "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.open]);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <Box
              sx={style}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Typography
                style={{ margin: "0.5rem 0 0.5rem 0", color: "#3584FC" }}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Create a new batch
              </Typography>
              <div>
                <TextField
                  className={styles.batch_input_item}
                  label="Batch Number"
                  type="number"
                  placeholder="Ex : 41"
                  required
                  name="batchNum"
                  value={batch.batchNum}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <TextField
                  className={styles.batch_input_item}
                  label="Batch strength"
                  type="number"
                  placeholder="Ex : 78"
                  name="strength"
                  value={batch.strength}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <TextField
                  className={styles.batch_input_item}
                  label="Starting Year"
                  type="number"
                  placeholder="Ex : 2022"
                  required
                  name="startingYear"
                  value={batch.startingYear}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <TextField
                  className={styles.batch_input_item}
                  label="Ending Year"
                  type="number"
                  placeholder="Ex : 2024"
                  required
                  name="endingYear"
                  value={batch.endingYear}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <GeneralButton
                onClick={handleCreateNewBranch}
                style={{ margin: "1rem 0 0.5rem 0"}}
                variant="contained"
              >
                Create
              </GeneralButton>
            </Box>
          </>
        )}
      </Modal>
    </div>
  );
}

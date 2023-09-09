import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import styles from "./page.module.css";
import { useState, useEffect, useContext } from "react";
import Loading from "@/components/common/Loading";

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
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            style={{ margin: "0.5rem 0 0.5rem 0", color: "#3584FC" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Student Details
          </Typography>
          <div>
             <h1>I am a student modal</h1>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

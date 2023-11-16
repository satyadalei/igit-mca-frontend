"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import GeneralButton from "@/components/common/GeneralButton";

import styles from "./notes.module.css";
const EachSemNoteCards = (props) => {
  return (
    <>
      <Card className={styles.card_item}>
        {/* <CardActionArea> */}
        <CardMedia
          component="img"
          height="140"
          image={props.img_url}
          alt="green iguana"
        />
        <CardContent
          className={styles.card_content}
          //style={{border:"1px solid red", minHeight:"230px"}}
        >
          <Typography gutterBottom variant="h5" component="div">
            {props.sem_no}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.sem_subjects &&
              props.sem_subjects.map((subject, index) => {
                return (
                  <span style={{ display: "block" }} key={index}>
                    {index + 1}. {subject}
                  </span>
                );
              })}
          </Typography>
        </CardContent>
        {/* </CardActionArea> */}
        <CardActions>
          <GeneralButton
            variant={"contained"}
            onClick={() => {}}
          >
            <DescriptionIcon />
            Notes
          </GeneralButton>

          <GeneralButton
            variant={"outlined"}
            className={"text-sky-500"}
            onClick={() => {}}
          >
            Syllabus
          </GeneralButton>
        </CardActions>
      </Card>
    </>
  );
};

export default EachSemNoteCards;

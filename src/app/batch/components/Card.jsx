"use client"
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./Card.module.css";
import AddIcon from "@mui/icons-material/Add";
import BasicModal from "../components/CreateBatchModal";
import Link from "next/link";

export default function ActionAreaCard(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card
      className={styles.card_item}
      sx={{ width: 290, height: 150, minWidth: 280, maxWidth: 345, }}
    >
      <CardActionArea sx={{ position: "relative" }} >
        <CardMedia
          className={`m-3 relative text-white !bg-sky-500 h-full`}
          component="img"
          sx={{ position: "relative", height: "220px" }}
        />
        {props.cardType === "batch" ? (
          <Link href={`/batch/${props.batch.batchNum}`} >
            <CardContent
              className={`${styles.card_item_content} `}
              sx={{ height: "220px" }}
            >
              <div className="text-white" >
                <p>Batch : {props.batch != undefined ? props.batch.batchNum : ""}</p>
                <p>strength : {props.batch != undefined ? props.batch.strength : ""}</p>
                <p>Registered :{" "}
                  {props.batch != undefined ? props.batch.totalRegistered : ""}
                </p>
                <p>
                  Year :{" "}
                  {props.batch != undefined
                    ? `${props.batch.startingYear} ` +
                    "-" +
                    ` ${props.batch.endingYear}`
                    : ""}
                </p>
              </div>
            </CardContent>
          </Link>
        ) : (
          <>
          <CardContent
            onClick={handleOpen}
            className="flex items-center flex-col !h-64"
          >
            <h3
              className="text-center"
            >
             +  Create new batch
            </h3>
          </CardContent>
          </>
        )}
      </CardActionArea>
      <BasicModal
        open={open}
        handleClose={handleClose}
        fetchAllBatch={props.fetchAllBatch}
      />
    </Card>
  );
}

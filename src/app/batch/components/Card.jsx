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
import Link  from "next/link";

export default function ActionAreaCard(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card
      className={styles.card_item}
      sx={{ width: 290, height: 220, minWidth: 280, maxWidth: 345, minHeight: 200 }}
    >
      <CardActionArea sx={{ position: "relative" }} >
        <CardMedia
          className={`${styles.card_item_media} h-full`}
          component="img"
          sx={{ position: "relative", height: "220px" }}
        />
        {props.cardType === "batch" ? (
          <Link href={`/batch/${props.batch.batchNum}`} >
            <CardContent
              className={`${styles.card_item_content}`}
              sx={{ height: "220px" }}
            >
              <Typography
                style={{ color: "#088dec" }}
                variant="h5" component="div">
                Batch : {props.batch != undefined ? props.batch.batchNum : ""}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                strength : {props.batch != undefined ? props.batch.strength : ""}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Registered :{" "}
                {props.batch != undefined ? props.batch.totalRegistered : ""}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Year :{" "}
                {props.batch != undefined
                  ? `${props.batch.startingYear} ` +
                  "-" +
                  ` ${props.batch.endingYear}`
                  : ""}
              </Typography>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </CardContent>
          </Link>
        ) : (
          <CardContent
            onClick={handleOpen}
            className="flex items-center flex-col h-full"
          >
            <div className="w-full flex justify-center items-center" >
              <AddIcon className={styles.add_new_batch_icon} />
            </div>
            <Typography
              style={{ fontSize: "14px", color: "grey" }}
              gutterBottom
              variant="h6"
              component="div"
              className="text-center"
            >
              Create new batch
            </Typography>
          </CardContent>
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

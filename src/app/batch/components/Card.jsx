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
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white w-[90%] sm:w-64 h-48 mr-3 border  relative rounded m-2" >
      <div className="p-2 w-full h-full" >
        {props.cardType === "batch" ? (
          <Link className="h-full w-full flex justify-center items-center " href={`/batch/${props.batch.batchNum}`} >
              <div>
                <p className="text-3xl mb-3 font-bold" >Batch : {props.batch != undefined ? props.batch.batchNum : ""}</p>
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
          </Link>
        ) : (
          <div
            onClick={handleOpen}
            className="h-full w-full flex  items-center justify-center cursor-pointer text-white"
          >
            <h3
              className="text-center"
            >
             <AddIcon className="text-5xl" /> Create new batch
            </h3>
          </div>
        )}
      </div>
      <BasicModal
        className="absolute top-0 left-0"
        open={open}
        handleClose={handleClose}
        fetchAllBatch={props.fetchAllBatch}
      />
    </div>
  );
}

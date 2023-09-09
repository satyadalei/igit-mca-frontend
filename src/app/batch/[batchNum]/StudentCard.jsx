import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./page.module.css";
import AddIcon from "@mui/icons-material/Add";
import StudentModal from "./StudentModal";
import { useRouter } from "next/navigation";

const StudentCard = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <Card
      className={styles.card_item}
      sx={{ minWidth: 280, maxWidth: 345, minHeight: 200 }}
    >
      <CardActionArea>
        <CardMedia
          className={styles.card_item_media}
          component="img"
          height="200"
          //   image="/static/images/cards/contemplative-reptile.jpg"
          //   alt="green iguana"
        />
        {props.cardType === "student" ? (
          <CardContent
            className={styles.card_item_content}
          >
            <Typography gutterBottom variant="p" component="div">
             {`${props.student.userDetails.fName}`+ " " +`${props.student.userDetails.mName}`+ " " + `${props.student.userDetails.lName}`}
            </Typography>
            <Typography gutterBottom variant="p" component="div">
             Field : {props.student.fieldOfInterest}
            </Typography>
          </CardContent>
        ) : (
          <CardContent>
            <h1>I am skeleton</h1>
          </CardContent>
        )}
      </CardActionArea>
      <StudentModal
        open={open}
        handleClose={handleClose}
      />
    </Card>
  )
}

export default StudentCard
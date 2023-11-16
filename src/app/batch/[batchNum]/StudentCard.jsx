import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea, Skeleton } from "@mui/material";
import styles from "./page.module.css";
import AddIcon from "@mui/icons-material/Add";
import StudentModal from "./StudentModal";
import { useRouter } from "next/navigation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import EmailIcon from '@mui/icons-material/Email';

const StudentCard = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const disableLink = (e) => {
    e.preventDefault();
  };
  const {email} = props.student != undefined && props.student;
  const {name, homeDist} = props.student != undefined && props.student.userDetails;
  const {linkedInLink, githubLink} = props.student != undefined && props.student.userDetails.socialLinks;
  return (
    <Card className={styles.card_item}>
      {props.cardType === "student" ? (
        <CardContent className={styles.card_item_content}>
          <Avatar
            style={{
              width: "150px",
              height: "150px",
              margin: "0.5rem 0 0.5rem 0"
            }}
            src={props.student.profilePic.url || ""}
          />
          <Typography
            style={{
              color: "black",
              fontSize: "1rem",
              fontWeight: "500",
              marginBottom: "0.5rem",
              marginTop: "0.8rem",
            }}
            gutterBottom
            variant="p"
            component="div"
          >
            {name}
          </Typography>
          <Typography>
          From : {homeDist}
          </Typography>
          <div className={styles.social_links_box}>
            <Link
              style={{
                color: `${
                  linkedInLink === ""
                    ? "#d0d0d1"
                    : "#088dec" 
                }`
              }}
              target="_blank"
              onClick={
                linkedInLink === "" &&
                disableLink
              }
              href={linkedInLink}
            >
              <LinkedInIcon className={styles.social_icon} />
            </Link>
            <Link
               style={{
                color: `${
                  githubLink === ""
                    ? "#d0d0d1"
                    : "#1F2328"
                }`, 
                marginRight:"0.5rem"
              }}
              target="_blank"
              onClick={
                githubLink === "" &&
                disableLink
              }
              href={githubLink}
            >
              <GitHubIcon className={styles.social_icon} />
            </Link>

            <Link 
            href={`mailto:${email}`} 
            style={{
                color: "black" 
                // color: "#088dec" 
                }
              }
            >
              <EmailIcon />
            </Link>
          </div>
        </CardContent>
      ) : (
        <CardContent className={styles.card_item_content} >
        {/* ---- SKELETON -- */}
        <Skeleton
            variant="circular"
            style={{
              width: "150px",
              height: "150px",
              margin: "0.5rem 0 0.5rem 0"
            }}
          />
          <Skeleton
            variant="text"
            style={{
              width:"200px",
              fontSize: "1.2rem",
              fontWeight: "500",
              marginBottom: "0.5rem",
              marginTop: "0.8rem",
            }}
          />
          <div className={styles.social_links_box}>
            <Skeleton variant="rounded" width={25} height={25} className={styles.social_icon} />
            <Skeleton variant="rounded" width={25} height={25} className={styles.social_icon} />
          </div>
        </CardContent>
      )}
      {/* </CardActionArea> */}
      <StudentModal open={open} handleClose={handleClose} />
    </Card>
  );
};

export default StudentCard;

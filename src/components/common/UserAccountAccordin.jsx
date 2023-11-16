import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UserAccordionItem from "./UserAccordinItem";
import UserDetails from "../admin/UserDetails";
import { Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

export default function UserAccountAccordion(props) {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const userAccounts = props.userAccounts;
  const calculateTime = (timeStamp) => {
    const registeredTimeInSec = Math.floor(
      new Date(timeStamp).getTime() / 1000
    );
    const timeNowInSec = Math.floor(new Date().getTime() / 1000);
    let timeDiff = timeNowInSec - registeredTimeInSec;
    let remainingSecs = timeDiff;
    const days = Math.floor(remainingSecs / 86400);
    remainingSecs = remainingSecs % 86400;
    const hours = Math.floor(remainingSecs / 3600);
    remainingSecs = remainingSecs % 3600;
    const minutes = Math.floor(remainingSecs / 60);
    const seconds = Math.floor(remainingSecs % 60);

    let finalString;
    if (days === 0 && hours === 0 && minutes === 0) {
      return (finalString = `${seconds} sec ago`);
    }
    if (days === 0 && hours === 0) {
      return (finalString = `${minutes} min`);
    }
    if (days === 0) {
      return (finalString = `${hours} hrs ago`);
    }
    finalString = `${days} days ago`;

    return finalString;
  };

  return (
    <div>
      {userAccounts.map((user, index) => {
        const {name} = user.userDetails;
        const {registrationDate, status} = user;
        return (
          <Accordion
            key={index}
            className=" mt-2 mb-2"
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className="flex justify-around items-center  border-2 border-sky-700"
            >
              <div className="w-[5%]">
                <Avatar
                  className=""
                  alt={name}
                  src={user.profilePic.url}
                />
              </div>
              <p className="w-[15%] flex items-center">
                {name}
              </p>

              <p className="w-[10%] flex items-center">
                Batch : {user.batchNum}
              </p>

              <p className="w-[25%] flex items-center">
                {/* Registration At : {new Date(user.registrationDate).toISOString()} */}
                Registered : {calculateTime(registrationDate)}
              </p>

              <p className="w-[10%] flex items-center">
                Status :{" "}
                {status === 0 ? (
                  <CancelIcon className="text-red-500" />
                ) : (
                  <CheckCircleIcon className="text-green-500" />
                )}
              </p>
            </AccordionSummary>
            <AccordionDetails>
              {/* Here we are passing fetchUserAccounts because we want to fetchUserAccounts every time each user account get verified to update all user account status  */}
              <UserDetails
                fetchUserAccounts={props.fetchUserAccounts}
                user={user}
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

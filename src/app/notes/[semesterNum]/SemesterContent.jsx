import React from "react";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";


const SemesterContent = (props) => {
  // console.log(props.semData);
  // console.log(props.semData.allSubjects);
  const router = useRouter();
  const semNum = props.semNum;
  // const allSubjectsNamesArray = props.semData.allSubjects;
  const obj = props.semData.subjectDetails;
  const subjectDetailsArray = Object.keys(obj).map((key) => obj[key]);

  // console.log(subjectDetailsArray.length);
  // console.log(subjectDetails);
  return (
    <>
      {subjectDetailsArray.map((subject, index) => {
        return (
          <div key={index} className={styles.subject_item_box}>
            {/* --- Paper name & number */}
            <div>
              {/* <p>Paper {index + 1}</p> */}
              <h3 className={styles.subject_name}>{subject.subjectName}</h3>
            </div>

            {/* --- Paper code --- */}
            <div style={{ marginBottom: "0.5rem" }}>
              <p className={styles.paper_code}>Paper code</p>
              <h5>{subject.paperCode}</h5>
            </div>

            {/* -- Instructor ---  */}
            <div className={styles.instructor_box}>
              {subject.instructor.length > 1 ? (
                <>
                  <p className={styles.instructor}>Instructors : </p>
                  {subject.instructor.map((instructor, index) => {
                    return <h4 key={index}>{instructor} </h4>;
                  })}
                </>
              ) : (
                <>
                  <p className={styles.instructor}>Instructor : </p>
                  {subject.instructor.map((instructor, index) => {
                    return <h4 key={index}>{instructor} </h4>;
                  })}
                </>
              )}
            </div>

            {/* --- Button links */}
            <div>
              <Button
                disabled={subject.links.notes === "" ? true : false}
                className={styles.subject_btn}
                variant="contained"
                size="small"
                onClick={()=> {window.open(subject.links.notes, "_blank");}} // this opens links in a new tab
              >
                Notes
              </Button>

              <Button
                disabled={subject.links.assignments === "" ? true : false}
                className={styles.subject_btn}
                variant="contained"
                size="small"
                onClick={()=> {window.open(subject.links.assignments, "_blank");}}
              >
                Questions
              </Button>

              <Button
                disabled={subject.links.question === "" ? true : false}
                className={styles.subject_btn}
                variant="contained"
                onClick={()=> {window.open(subject.links.question, "_blank");}}
                size="small"
              >
                Assignments
              </Button>

              <Button
                disabled={subject.links.books === "" ? true : false}
                className={styles.subject_btn}
                variant="contained"
                size="small"
                onClick={()=> {window.open(subject.links.books, "_blank");}}
              >
                Books
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SemesterContent;

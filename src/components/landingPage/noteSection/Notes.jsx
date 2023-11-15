import React from "react";
import EachSemNoteCards from "./EachSemNoteCards";
import styles from "./notes.module.css";

const Notes = () => {
  return (
    <>
      <hr />
      <div className={styles.notes_section}>
        <h1 className={styles.note_heading}>Notes</h1>
        <p className={styles.note_description}>
          It includes all of your Semester Notes, Question and Assignments. If
          any note is missed to place you can place the issue in contact page.
        </p>
        <div className={styles.all_sem_notes_box}>
          <EachSemNoteCards
            img_url={
              "https://raw.githubusercontent.com/satyadalei/igit-mca-frontend/main/public/images/semester1.png"
            }
            sem_no={"1st sem"}
            sem_subjects={[
              "Problem Solving & Programming Using C",
              "Computer Organization and Architecture ",
              "Discrete Mathematics",
              "Communicative English ",
              "Engineering Economics & Accounting",
            ]}
          />
          <EachSemNoteCards
            img_url={
              "https://raw.githubusercontent.com/satyadalei/igit-mca-frontend/main/public/images/semester2.png"
            }
            sem_no={"2nd sem"}
            sem_subjects={[
              "OOPs Using C++",
              "Operating System ",
              "Database Management System ",
              "Design of Algorithms with Data Structures ",
              "Formal Languages and Automata Theory",
            ]}
          />
          <EachSemNoteCards
            img_url={
              "https://raw.githubusercontent.com/satyadalei/igit-mca-frontend/main/public/images/semester3.png"
            }
            sem_no={"3rd sem"}
            sem_subjects={[
              "Programming with Java" ,
              "Data Communications and Computer Networks",
              "Compiler Design" ,
              "Data Warehousing and Data Mining " ,
              "Internet of Things"
            ]}
          />
          <EachSemNoteCards
            img_url={
              "https://raw.githubusercontent.com/satyadalei/igit-mca-frontend/main/public/images/semester4.png"
            }
            sem_no={"4th sem"}
            sem_subjects={[
              "Artificial Intelligence" ,
              "Python Programming" ,
              "Object Oriented Software Engineering "
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Notes;

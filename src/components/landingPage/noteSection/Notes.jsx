"use client";
import React from "react";
import EachSemNoteCards from "./EachSemNoteCards";
import styles from "./notes.module.css";
import { motion } from "framer-motion";

// Define the variants for the title animation
const titleVariants = {
  hide: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

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
          <motion.div
            className="title"
            variants={titleVariants}
            initial="hide"
            whileInView="show"
            whileOut="hide"
          >
            <EachSemNoteCards
              img_url={
                "https://firebasestorage.googleapis.com/v0/b/community-common-images.appspot.com/o/images%2Fcommon-images%2Fhome-page%2Fsemester%2Fsemester%201.jpg?alt=media&token=407e7650-4091-41f4-acaf-66f063aecfbb"
              }
              syllabusLink={
                "https://drive.google.com/file/d/1N-dBfA94U_VlM7HKQoD0U7uc-V_E06n3/view"
              }
              semester={1}
              sem_no={"1st sem"}
              sem_subjects={[
                "Problem Solving & Programming Using C",
                "Computer Organization and Architecture ",
                "Discrete Mathematics",
                "Communicative English ",
                "Engineering Economics & Accounting",
              ]}
            />
          </motion.div>

          <motion.div
            className="title"
            variants={titleVariants}
            initial="hide"
            whileInView="show"
            whileOut="hide"
          >
            <EachSemNoteCards
              img_url={
                "https://firebasestorage.googleapis.com/v0/b/community-common-images.appspot.com/o/images%2Fcommon-images%2Fhome-page%2Fsemester%2Fsemester2.jpg?alt=media&token=1fcaf41d-0154-4d1b-9255-8dc6118abd6b"
              }
              syllabusLink={
                "https://drive.google.com/file/d/1mEW4TXcKva5RFF-IBz-eoU9FuE_itaXS/view"
              }
              semester={2}
              sem_no={"2nd sem"}
              sem_subjects={[
                "OOPs Using C++",
                "Operating System ",
                "Database Management System ",
                "Design of Algorithms with Data Structures ",
                "Formal Languages and Automata Theory",
              ]}
            />
          </motion.div>

          <motion.div
            className="title"
            variants={titleVariants}
            initial="hide"
            whileInView="show"
            whileOut="hide"
          >
            <EachSemNoteCards
              img_url={
                "https://firebasestorage.googleapis.com/v0/b/community-common-images.appspot.com/o/images%2Fcommon-images%2Fhome-page%2Fsemester%2Fsemester3.jpg?alt=media&token=e084c973-a380-4be1-8724-fc63a838d6f4"
              }
              syllabusLink={
                "https://drive.google.com/file/d/1CyP1bluv_XIOl6k9fTqmF_81BvBJfNKU/view"
              }
              semester={3}
              sem_no={"3rd sem"}
              sem_subjects={[
                "Programming with Java",
                "Data Communications and Computer Networks",
                "Compiler Design",
                "Data Warehousing and Data Mining ",
                "Internet of Things",
              ]}
            />
          </motion.div>
          <motion.div
            className="title"
            variants={titleVariants}
            initial="hide"
            whileInView="show"
            whileOut="hide"
          >
            <EachSemNoteCards
              img_url={
                "https://firebasestorage.googleapis.com/v0/b/community-common-images.appspot.com/o/images%2Fcommon-images%2Fhome-page%2Fsemester%2Fsemester4.jpg?alt=media&token=87e3fa24-0628-4da7-a1b9-b056ecce65dc"
              }
              syllabusLink={
                "https://drive.google.com/file/d/1k3X_K2j_BIdkfFyZNpXhwmiv9lw0UFBj/view"
              }
              semester={4}
              sem_no={"4th sem"}
              sem_subjects={[
                "Artificial Intelligence",
                "Python Programming",
                "Object Oriented Software Engineering ",
              ]}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Notes;

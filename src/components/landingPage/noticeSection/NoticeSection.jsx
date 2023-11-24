"use client"
import React from "react";
import styles from "./css/NoticeSection.module.css";
import NoticeCard from "./NoticeCard";
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


const NoticeSection = () => {
  return (
    <>
      <hr />
      <motion.div
        className="title"
        variants={titleVariants}
        initial="hide"
        whileInView="show"
        whileOut="hide"
      >
        <div className={styles.notice_section}>
          <h1 className={styles.notice_heading}>Notices</h1>
          <div className="flex flex-wrap justify-between">
            {/* <NoticeCard noticeLink={""} notice_name={"Course Fee"} /> */}
            <NoticeCard
              noticeLink={
                "https://drive.google.com/file/d/1pify8jp4V9syDMuY-cVh0jnf7cDClDT3/view?usp=sharing"
              }
              notice_name={"Syllabus"}
            />
            <NoticeCard
              noticeLink={
                "https://drive.google.com/file/d/17FsH5umQsmLr9uMEy3gxWGM0-BAeBHyT/view?usp=sharing"
              }
              notice_name={"Wifis"}
            />
            <NoticeCard
              noticeLink={
                "https://drive.google.com/file/d/1YQ831xsPOr0WJbdA8yLCHEm0YRmAvNCU/view?usp=sharing"
              }
              notice_name={"Academic Callender 2023-24 "}
            />
            <NoticeCard
              noticeLink={
                "https://drive.google.com/file/d/1D4TylWHHNh47xSz9D5erau2XT2ykRbHp/view?usp=sharing"
              }
              notice_name={"Semester registration form"}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NoticeSection;

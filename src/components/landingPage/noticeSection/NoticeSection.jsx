import React from 'react'
import styles from "./css/NoticeSection.module.css"
import NoticeCard from './NoticeCard'
const NoticeSection = () => {
  return (
    <>
        <hr />
        <div className={styles.notice_section} >
           <h1 className={styles.notice_heading} >
              Notices
           </h1>
           <div className="flex flex-wrap justify-between" >
              {/* <NoticeCard noticeLink={""} notice_name={"Course Fee"} /> */}
              <NoticeCard noticeLink={"https://drive.google.com/file/d/1pify8jp4V9syDMuY-cVh0jnf7cDClDT3/view?usp=sharing"} notice_name={"Syllabus"} />
              <NoticeCard noticeLink={"https://drive.google.com/file/d/17FsH5umQsmLr9uMEy3gxWGM0-BAeBHyT/view?usp=sharing"} notice_name={"Wifis"} />
              <NoticeCard noticeLink={"https://drive.google.com/file/d/1YQ831xsPOr0WJbdA8yLCHEm0YRmAvNCU/view?usp=sharing"} notice_name={"Academic Callender 2023-24 "} />
              <NoticeCard noticeLink={"https://drive.google.com/file/d/1D4TylWHHNh47xSz9D5erau2XT2ykRbHp/view?usp=sharing"} notice_name={"Semester registration form"} />
           </div>
        </div>
    </>
  )
}

export default NoticeSection
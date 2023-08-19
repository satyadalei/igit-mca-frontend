import React from 'react'
import styles from "./css/notice.module.css"
import NoticeCard from './NoticeCard'
const NoticeSection = () => {
  return (
    <>
        <hr />
        <div className={styles.notice_section} >
           <h1 className={styles.notice_heading} >
              Notices
           </h1>
           <div className={styles.allNotices_box} >
              <NoticeCard notice_name={"Course Fee"} />
              <NoticeCard notice_name={"Syllabus"} />
              <NoticeCard notice_name={"Wifis"} />
              <NoticeCard notice_name={"42 Batch students List"} />
              <NoticeCard notice_name={"Academic Callender"} />
              <NoticeCard notice_name={"Semester registration form"} />
           </div>
        </div>
    </>
  )
}

export default NoticeSection
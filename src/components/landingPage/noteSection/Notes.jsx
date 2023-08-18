import React from 'react'
import EachSemNoteCards from './EachSemNoteCards'
import styles from "./css/notes.module.css"
const Notes = () => {
  return (
    <>
       <hr />
       <div className={styles.notes_section} >
           <h1>Notes</h1>
           <p>
                It includes all of your Semester Notes, Question and Assignments. If any note is missed to place you can place the issue in contact page.
           </p>
           <div className={styles.all_sem_notes_box} >
                 <EachSemNoteCards sem_no={"1st sem"} />
                 <EachSemNoteCards sem_no={"2nd sem"} />
                 <EachSemNoteCards sem_no={"3rd sem"} />
                 <EachSemNoteCards sem_no={"4th sem"} />
           </div>
       </div> 
    </>
  )
}

export default Notes
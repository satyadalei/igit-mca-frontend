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
              "https://firebasestorage.googleapis.com/v0/b/mca-community.appspot.com/o/images%2Fthumbnails%2Fsemesters%2Fsemester%201.jpg?alt=media&token=1446beca-296d-42c1-a856-c88e10bfe3f9"
            }
            syllabusLink={"https://drive.google.com/file/d/1N-dBfA94U_VlM7HKQoD0U7uc-V_E06n3/view"}
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
          <EachSemNoteCards
            img_url={
              "https://firebasestorage.googleapis.com/v0/b/mca-community.appspot.com/o/images%2Fthumbnails%2Fsemesters%2Fsemester2.jpg?alt=media&token=c760ab12-6c87-45bc-a665-e5e77ffb6398"
            }
            syllabusLink={"https://drive.google.com/file/d/1mEW4TXcKva5RFF-IBz-eoU9FuE_itaXS/view"}
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
          <EachSemNoteCards
            img_url={
              "https://firebasestorage.googleapis.com/v0/b/mca-community.appspot.com/o/images%2Fthumbnails%2Fsemesters%2Fsemester3.jpg?alt=media&token=db1e28e9-cc39-40d2-ba4c-dc3078817040"
            }
            syllabusLink={"https://drive.google.com/file/d/1CyP1bluv_XIOl6k9fTqmF_81BvBJfNKU/view"}
            semester={3}
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
              "https://firebasestorage.googleapis.com/v0/b/mca-community.appspot.com/o/images%2Fthumbnails%2Fsemesters%2Fsemester4.jpg?alt=media&token=5624c416-1304-4369-aa1f-a82e54007784"
            }
            syllabusLink={"https://drive.google.com/file/d/1k3X_K2j_BIdkfFyZNpXhwmiv9lw0UFBj/view"}
            semester={4}
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

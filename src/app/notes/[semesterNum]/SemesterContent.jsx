import React from "react";

const SemesterContent = (props) => {
  // console.log(props.semData);
  // console.log(props.semData.allSubjects);
  const semNum = props.semNum;
  // const allSubjectsNamesArray = props.semData.allSubjects;
  const obj = props.semData.subjectDetails;
  const subjectDetailsArray = Object.keys(obj).map((key) => obj[key]);

  // console.log(subjectDetailsArray.length);
  // console.log(subjectDetails);
  return (
    <>
      {subjectDetailsArray.map((subject, index) => {
        return <div key={index}>
           <div>
                <p>Paper {index}</p>
                <h3>{subject.subjectName}</h3>
           </div>

           <div>
                <p>Paper code</p>
                <h3>{subject.paperCode}</h3>
           </div>

           <div>
                <p>Instructors : </p>
                {subject.instructor.map((instructor,index)=>{
                   return <>
                   <h5 key={index} >{instructor} </h5>
                   {/* <br /> */}
                   </>
                })}
           </div>
        </div>;
      })}
    </>
  );
};

export default SemesterContent;

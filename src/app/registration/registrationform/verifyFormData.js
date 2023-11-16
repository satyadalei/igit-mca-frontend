const verifyFormData = (details) => {
    // Check batch 
    if (details.batch === "No batch selected") {
        return {
            error: true,
            message : "Enter your batch"
        }
    }
    // check name 
    if (details.fullName === "") {
        return {
            error: true,
            message : "Enter your full name"
        }
    }
    // check password 
    if (details.password.length < 5) {
        return {
            error: true,
            message: "Enter a valid password"
        }
    }
    // homeDist 
    if (details.homeDist === "No district selected") {
        return {
            error: true,
            message: "Enter home district"
        }
    }

    // -- IF everything is correct ----
    else{
        return {
            error : false,
            message : "Everything correct"
        }
    }
}
export default verifyFormData

// const verifyFormData = (details) => {
//     // check password 
//     if (details.password.length < 5) {
//         return {
//             error: true,
//             message: "Enter a valid password"
//         }
//     }
//     // roll number
//     // if (details.rollNum === "") {
//     //     return {
//     //         error: true,
//     //         message: "Enter your roll number"
//     //     }
//     // }
//     // fName 
//     if (details.fName.length < 3) {
//         if (details.fName === "") {
//             return {
//                 error: true,
//                 message: "Enter first name"
//             }
//         }else{
//             return {
//                 error: true,
//                 message: "First name must be at least 3 character"
//             }
//         }
//     }
//     // lName 
//     if (details.lName === "") {
//         return {
//             error: true,
//             message: "Enter last name"
//         }
//     }
//     // homeDist 
//     if (details.homeDist === "") {
//         return {
//             error: true,
//             message: "Enter home district"
//         }
//     }
//      //mobile number
//      if (details.mobile === "" || details.mobile.length != 10) {
//         if (details.mobile === "") {
//             return {
//                 error: true,
//                 message: "Enter mobile number"
//             }
//         }else{
//             return {
//                 error: true,
//                 message: "Invalid mobile number"
//             }
//         }
//     }
//     //gradCourse
//     if (details.gradCourse === "") {
//         return {
//             error: true,
//             message: "Select your graduation course"
//         }
//     }
//     //profilePic
//     if (details.profilePic === "") {
//         return {
//             error : true,
//             message : "Enter a profile picture"
//         }
//     }

//     // -- IF everything is correct ----
//     else{
//         return {
//             error : false,
//             message : "Everything correct"
//         }
//     }
// }
// export default verifyFormData
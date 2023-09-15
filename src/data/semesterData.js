// data structure of entire semester
const semester = {
    allSemesters: [1, 2, 3, 4],
    // --- SEMESTER 1 ----
    semester1: {
        allSubjects: [
            "Problem Solving & Programming Using C",
            "Computer Organization and Architecture",
            "Discrete Mathematics",
            "Communicative English",
            "Engineering Economics & Accounting",
        ],
        subjectDetails: {
            // --- format ----
            // subject: {
            //     subjectName: "",
            //     paperCode: "",
            //     instructor : [""],
            //     thumbNailUrl: "",
            // },
            c: {
                subjectName: "Problem Solving & Programming Using C",
                paperCode: "20CAC101",
                instructor: ["Dr. Niroj Kumar Pani"],
                thumbNailUrl: "",
            },
            coa: {
                subjectName: "Computer Organization and Architecture",
                paperCode: "20CAC102",
                instructor: ["Dr. Priyabrata Sahu"],
                thumbNailUrl: "",
            },
            math: {
                subjectName: "Discrete Mathematics",
                paperCode: "20CAS102",
                instructor: ["Dr. Kailash Chandra Paul"],
                thumbNailUrl: "",
            },
            english: {
                subjectName: "Communicative English",
                paperCode: "20CAH101",
                instructor: ["Dr. Debasish Nayak", "Dr. Samarpita Dash"],
                thumbNailUrl: "",
            },
            economics: {
                subjectName: "Engineering Economics & Accounting",
                paperCode: "20CAH102",
                instructor : ["Dr. Sankar Moharana", "Dr. Madhuswapna Pattanaik"],
                thumbNailUrl: "",
            }
        },
    },
    // --- SEMESTER 2 ----
    semester2 : {
        allSubjects : [
            "OOPs Using C++",
            "Operating System",
            "Database Management System",
            "Design of Algorithms with Data Structures",
            "Formal Languages and Automata Theory"
        ],
        subjectDetails : {
            cpp : {
                subjectName: "OOPs Using C++",
                paperCode: "20CAC203",
                instructor : ["Mr. Bapuji Rao"],
                thumbNailUrl: "",
            },
            os : {
                subjectName : "Operating System",
                paperCode : "20CAC204",
                instructor : [" Dr. Dillip Ku. Swain"],
                thumbNailUrl : ""
            },
            daa : {
                subjectName : "Design of Algorithms with Data Structures",
                paperCode : "20CAC206",
                instructor : ["Dr. (Mrs.) Sasmita Mishra"],
                thumbNailUrl : ""
            },
            flat : {
                subjectName : "Formal Languages and Automata Theory",
                paperCode : "20CAC207",
                instructor : ["Dr. Sarojananda Mishra"],
                thumbNailUrl : ""
            },
            dbms : {
                subjectName : "Database Management System",
                paperCode : "20CAC205",
                instructor : ["Mrs. Anupama Sahu"],
                thumbNailUrl : ""
            },

        }
    },
    // --- SEMESTER 3 ----
    semester3 : {
        allSubjects : [
            "Programming with Java",
            "Data Communications and Computer Networks",
            "Compiler Design",
            "Internet of Things",
            "Data warehousing and Data Mining"
        ],
        subjectDetails : {
            java : {
                subjectName: "Programming with Java",
                paperCode: "20CAC308",
                instructor : ["Mr. Ramesh Kumar Sahoo"],
                thumbNailUrl: "",
            },
            dccn : {
                subjectName: "Data Communications and Computer Networks",
                paperCode: "20CAC309",
                instructor : ["Dr. Srinivas Sethi"],
                thumbNailUrl: "",
            },
            cd : {
                subjectName: "Compiler Design",
                paperCode: "20CAC310",
                instructor : ["Dr. Biswanath Sethi"],
                thumbNailUrl: "",
            },
            iot : {
                subjectName: "Internet of Things",
                paperCode: "20CAE303",
                instructor : ["Mr. Suvendu Kumar Jena"],
                thumbNailUrl: "",
            },
            dwdm : {
                subjectName: "Data warehousing and Data Mining",
                paperCode: "20CAE308",
                instructor : ["Dr. Sanjay Kumar Patra"],
                thumbNailUrl: "",
            }
        }
    },
    // --- SEMESTER 4 ----
    semester4 : {
        allSubjects : [
            "Artificial Intelligence",
            "Object Oriented Software Engineering",
            "Python Programming"
        ],
        subjectDetails : {
            ai : {
                subjectName: "Artificial Intelligence",
                paperCode: "20CAC411",
                instructor : ["Dr. Sanjay Kumar Patra"],
                thumbNailUrl: "",
            },
            oose : {
                subjectName: "Object Oriented Software Engineering",
                paperCode: "20CAC412",
                instructor : [""],
                thumbNailUrl: "",
            },
            python : {
                subjectName: "Python Programming",
                paperCode: "20CAC413",
                instructor : ["Mr. Ramesh Sahoo"],
                thumbNailUrl: "",
            }
        }
    }
};

module.exports = semester;
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
                // links are the google drive links
                links : {
                    notes : "https://drive.google.com/drive/u/4/folders/1KdVjERPdbVckO5tzPYzsn5osJqet1ZDF",
                    assignments : "https://drive.google.com/drive/u/4/folders/17ytYco4WpeBU-LUtaycBG403ttgcIMlx",
                    question : "https://drive.google.com/drive/u/4/folders/1jFj7OaBDQtO7P1HwQo3my1FYyC7_484-",
                    books : ""
                }
            },
            coa: {
                subjectName: "Computer Organization and Architecture",
                paperCode: "20CAC102",
                instructor: ["Dr. Priyabrata Sahu"],
                thumbNailUrl: "",
                links : {
                    notes : "https://drive.google.com/drive/folders/1GEtPjPI7AZRK2S4T8ymxo_irw46-hUSq?usp=sharing",
                    assignments : "",
                    question : "https://drive.google.com/drive/u/4/folders/1QXGQIxTCFqTkEjeTMdAozLOisjw69s3w",
                    books : ""
                }
            },
            math: {
                subjectName: "Discrete Mathematics",
                paperCode: "20CAS102",
                instructor: ["Dr. Kailash Chandra Paul"],
                thumbNailUrl: "",
                links : {
                    notes : "https://drive.google.com/drive/folders/11P9PX6NKvnrMl7tqL1enIpjb_3GoKrSR?usp=sharing",
                    assignments : "",
                    question : "https://drive.google.com/drive/u/4/folders/1Ir5_2CPoZysGijEEfSxvt-JpLa_HhMwL",
                    books : ""
                }
            },
            english: {
                subjectName: "Communicative English",
                paperCode: "20CAH101",
                instructor: ["Dr. Debasish Nayak", "Dr. Samarpita Dash"],
                thumbNailUrl: "",
                links : {
                    notes : "https://drive.google.com/drive/u/4/folders/1fdzkID5mHlyKrTt73XT0bUffy09npP97",
                    assignments : "",
                    question : "https://drive.google.com/drive/folders/1woG1WU9WklnVYk-aI-IzqhQIp1ltrnZ5?usp=sharing",
                    books : ""
                }
            },
            economics: {
                subjectName: "Engineering Economics & Accounting",
                paperCode: "20CAH102",
                instructor : ["Dr. Sankar Moharana", "Dr. Madhuswapna Pattanaik"],
                thumbNailUrl: "",
                links : {
                    notes : "https://drive.google.com/drive/u/4/folders/1nnorARoCdue_mjBrOdtfP3ohw6p-Kizi",
                    assignments : "",
                    question : "https://drive.google.com/drive/u/4/folders/1cG0qwkHuHSTpQh9h9K5bInq2ScAIxwG4",
                    books : ""
                }
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
                links : {
                    notes : "https://drive.google.com/drive/u/4/folders/1RKpYUvnhfArV3ja88e84sVqSKp8RdL66",
                    assignments : "",
                    question : "https://drive.google.com/drive/folders/1SEfT9lK9XbBFKlpsNcbEAWkQuvRRYI2g",
                    books : ""
                }
            },
            os : {
                subjectName : "Operating System",
                paperCode : "20CAC204",
                instructor : [" Dr. Dillip Ku. Swain"],
                thumbNailUrl : "",
                links : {
                    notes : "https://drive.google.com/drive/u/4/folders/1qdxSmd8FahLfViMC9LRCRAgnscGgfqV6",
                    assignments : "",
                    question : "https://drive.google.com/drive/u/4/folders/1w7F5CRrYSQvnXZeCv5GiMfgA7VwyK1Wj",
                    books : ""
                }
            },
            daa : {
                subjectName : "Design of Algorithms with Data Structures",
                paperCode : "20CAC206",
                instructor : ["Dr. (Mrs.) Sasmita Mishra"],
                thumbNailUrl : "",
                links : {
                    notes : "https://drive.google.com/drive/u/4/folders/1dgCJwRN1TlDuoT-NiGy7Cj-DlY1qQDbO",
                    assignments : "",
                    question : "https://drive.google.com/drive/u/4/folders/1Qy5W22teq6lDVQH4BgyesyjjZnUjPNEN",
                    books : ""
                }
            },
            flat : {
                subjectName : "Formal Languages and Automata Theory",
                paperCode : "20CAC207",
                instructor : ["Dr. Sarojananda Mishra"],
                thumbNailUrl : "",
                links : {
                    notes : "https://drive.google.com/drive/u/4/folders/1UwrIF44kKdONjxnq4JrhNEy0eZv2-RUo",
                    assignments : "",
                    question : "https://drive.google.com/drive/u/4/folders/1OiG103POHShu0kYBJdusIYoEMgZZql7R",
                    books : ""
                }
            },
            dbms : {
                subjectName : "Database Management System",
                paperCode : "20CAC205",
                instructor : ["Mrs. Anupama Sahu"],
                thumbNailUrl : "",
                links : {
                    notes : "https://drive.google.com/drive/u/4/folders/1yvKVOWo1gNk1lMZ-mUk-Eul2afOXxOHS",
                    assignments : "",
                    question : "https://drive.google.com/drive/u/4/folders/156jwlUnnIvDEkQ90kzrQXVFMMdSf2DD5",
                    books : ""
                }
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
                links : {
                    notes : "",
                    assignments : "",
                    question : "",
                    books : ""
                }
            },
            dccn : {
                subjectName: "Data Communications and Computer Networks",
                paperCode: "20CAC309",
                instructor : ["Dr. Srinivas Sethi"],
                thumbNailUrl: "",
                links : {
                    notes : "",
                    assignments : "",
                    question : "",
                    books : ""
                }
            },
            cd : {
                subjectName: "Compiler Design",
                paperCode: "20CAC310",
                instructor : ["Dr. Biswanath Sethi"],
                thumbNailUrl: "",
                links : {
                    notes : "",
                    assignments : "",
                    question : "",
                    books : ""
                }
            },
            iot : {
                subjectName: "Internet of Things",
                paperCode: "20CAE303",
                instructor : ["Mr. Suvendu Kumar Jena"],
                thumbNailUrl: "",
                links : {
                    notes : "",
                    assignments : "",
                    question : "",
                    books : ""
                }
            },
            dwdm : {
                subjectName: "Data warehousing and Data Mining",
                paperCode: "20CAE308",
                instructor : ["Dr. Sanjay Kumar Patra"],
                thumbNailUrl: "",
                links : {
                    notes : "",
                    assignments : "",
                    question : "",
                    books : ""
                }
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
                instructor : ["Dr. Medini Srinibas"],
                thumbNailUrl: "",
                links : {
                    notes : "",
                    assignments : "",
                    question : "",
                    books : ""
                }
            },
            oose : {
                subjectName: "Object Oriented Software Engineering",
                paperCode: "20CAC412",
                instructor : ["Mrs. Anupama Sahu"],
                thumbNailUrl: "",
                links : {
                    notes : "",
                    assignments : "",
                    question : "",
                    books : ""
                }
            },
            python : {
                subjectName: "Python Programming",
                paperCode: "20CAC413",
                instructor : ["Mr. Ramesh Sahoo"],
                thumbNailUrl: "",
                links : {
                    notes : "",
                    assignments : "",
                    question : "",
                    books : ""
                }
            }
        }
    }
};

module.exports = semester;
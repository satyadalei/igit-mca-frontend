const sortStudents = (arrayOfStudents)=>{
    arrayOfStudents.sort((a, b) => {
        const fNameA = a.userDetails.fName.toUpperCase();
        const fNameB = b.userDetails.fName.toUpperCase();
    
        if (fNameA < fNameB) {
            return -1;
        }
        if (fNameA > fNameB) {
            return 1;
        }
    
        return 0;
    });

    return  arrayOfStudents;
}

module.exports = sortStudents;
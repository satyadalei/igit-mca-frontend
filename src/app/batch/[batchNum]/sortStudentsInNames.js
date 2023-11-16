const sortStudents = (arrayOfStudents)=>{
    arrayOfStudents.sort((a, b) => {
        const nameA = a.userDetails.name.toUpperCase();
        const nameB = b.userDetails.name.toUpperCase();
    
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
    
        return 0;
    });

    return  arrayOfStudents;
}

module.exports = sortStudents;
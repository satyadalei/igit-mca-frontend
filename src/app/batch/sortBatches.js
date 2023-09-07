// this function takes an array of objects & sorts based on some property :: here batch number in this case!!
const sortArrayObject = (array) => {
    let sortedArray = array;
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (sortedArray[i].batchNum > sortedArray[j].batchNum) {
                const hold = sortedArray[i];
                sortedArray[i] = sortedArray[j];
                sortedArray[j] = hold ;
            }
        }
    }

    return sortedArray;
}

module.exports = sortArrayObject ;
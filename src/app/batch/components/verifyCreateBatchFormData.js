const verify = (data) => {
  console.log(data);

  // check batchNum
  if (data.batchNum === "") {
    return {
      error: true,
      message: "Provide batch number"
    }
  }
  // check first year
  if (
    data.startingYear.toString().length != 4 ||
    data.startingYear === ""
  ) {
    return {
      error: true,
      message: "Invalid starting year"
    }
  }
  // check ending year
  if (
    data.endingYear.toString().length != 4 ||
    data.endingYear === ""
  ) {
    return {
      error: true,
      message: "Invalid ending year"
    }
  }

  // everything correct
  else{
    return {
      error: false,
      message: "everything correct"
    }
  }
}

module.exports = verify
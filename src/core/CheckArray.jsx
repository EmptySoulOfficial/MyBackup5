import react from "react";

// Checks, if array booleans are all true or false -> returns true/false
function CheckArray(arr) {
  let checkArrBooleans = arr => arr.every(Boolean)
  return checkArrBooleans
}

export default CheckArray

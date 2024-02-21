
// code from https://stackoverflow.com/questions/40438851/use-javascript-to-check-if-json-object-contain-value
function JsonContains(arr, key, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) return true;
  }
  return false;
}

export default JsonContains

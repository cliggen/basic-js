const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error();

  
  let finalArr = []
  
  
  for(let i = 0; i < arr.length; i++) {
    
    if(arr[i] == '--discard-next') {}
    if(arr[i] == '--discard-prev') {}
    if(arr[i] == '--double-next') {}
    if(arr[i] == '--double-prev') {}
}
};
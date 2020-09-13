const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
let counter = 0;
const cat = '^^';
  backyard.forEach(arr => {
    if(arr instanceof Array) {
     counter +=  countCats(arr);
    } else {
      if(arr === cat) {
        counter++;
      }
    }
  })
return counter;
};
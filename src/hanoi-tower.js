const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  const turn = Math.pow(2,disksNumber) - 1;
  const time = Math.floor(turn/ (turnsSpeed / 3600));
   return ({'turns':turn, 'seconds':time})
  }

  /* Recursive find of turns value
   *     let counter = 1;
   if(disksNumber == 1) {
      return counter;
   } else {
       counter +=  calculateHanoi(disksNumber-1);
       counter +=  calculateHanoi(disksNumber-1);
          return counter;
   }
   */
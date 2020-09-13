const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sample) {
  if (typeof sample !== "string" || sample <= 0 || sample > MODERN_ACTIVITY || /[A-Za-z]/.test(sample)) {
    return false;
  }
  const rateDecay= 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sample)) / rateDecay);
};
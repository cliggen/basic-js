const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) { // checking incoming value if it Array type
    return false;
  }
  members.forEach( (name, index) => {
    (typeof name === "string") ? members[index] = name.trim() : delete members[index]; // remove spaces
  });
  return members.reduce( (abbr, name) => // '' + slicing 1st letter + upperCase + split + sort + join
    abbr + name.slice(0, 1), 
  "").toUpperCase().split("").sort().join("");
};
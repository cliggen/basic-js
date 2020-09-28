const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let repeatTimes = options.repeatTimes;
    let separator = options.separator;
    let addition = options.addition;
    let additionRepeatTimes = options.additionRepeatTimes;
    let additionSeparator = options.additionSeparator;
    let result = '';
    let addStr = '';
    if (separator == undefined) {
        separator = '+';
    };
    if (additionSeparator == undefined) {
        additionSeparator = '|';
    };
    if (additionRepeatTimes == undefined && !addition) {
        addStr = '';
    } else if ((additionRepeatTimes == undefined && addition) || additionRepeatTimes == 1) {
        addStr = addition;
    } else {
        let i = 0;
        do {
            addStr += addition + additionSeparator;
            i = i + 1;
        } while (i < additionRepeatTimes - 1);
        addStr += addition;
    };
    if (repeatTimes == undefined || repeatTimes == 1) {
        result += str + addStr;
    } else {
        let j = 0;
        do {
            result += str + addStr + separator;
            j = j + 1;
        } while (j < repeatTimes - 1);
        result += str + addStr;
    };
    return result;
};
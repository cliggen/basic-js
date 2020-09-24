const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

    if (!Array.isArray(arr)) throw new Error();

    let result = arr.reduce((prev, curr, i) => {

        //если текущее значение равно методу - возвращаем текущее значение массива
        if (curr === '--discard-next' || curr === '--discard-prev' || curr === '--double-prev' || curr === '--double-next') return prev;
        //если предыдущее значение в исходном массиве дискард некст -скипаем его и возвращаем текущее значение массива
        if (arr[i - 1] === '--discard-next') return prev;
        //если предыдущее значение дабл некст , то пушим в наш массив 2 числа, иначе пушим одно будто это обычное число.
        (arr[i - 1] === '--double-next') ? prev.push(curr, curr): prev.push(curr);
        //если след значение дабл прев , то пушим в наш массив
        if (arr[i + 1] === '--double-prev') prev.push(curr);
        //если след значение дискард прев то режем наш массив на 1 
        if (arr[i + 1] === '--discard-prev') prev.splice(prev.length - 1, 1);

        return prev;

    }, []);

    return result;
};
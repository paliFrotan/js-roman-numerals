export const romanNumerals = (number) => {
    if (number === undefined) throw new Error('Roman Numeral is required');
    if (!Number.isInteger(number) || number >= 4000) return "";
    let answer = "";
    const romanNumeralsObj = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV:4,
        I: 1
    };
    for (let key in romanNumeralsObj) {
        while (number >= romanNumeralsObj[key]) {
          answer += key;
          number -= romanNumeralsObj[key];
        }
    }
    return answer;
}
export const romanNumerals = (number) => {
    if (number === undefined) throw new Error('Roman Numeral is required');
    if (!Number.isInteger(number)) return "";
    let answer = "";
    const romanNumeralsObj = {
        I: 1
    };
    for (const key in romanNumeralsObj) {
        while (number >= romanNumeralsObj[key]) {
          answer += key;
          number -= romanNumeralsObj[key];
        }
    }
    return answer;
}
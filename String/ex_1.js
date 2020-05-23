// 1
function twoDigitCombinations () {
    let result = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            result.push(`${i}${j}`);
        }
    }
    return result.toString();
}
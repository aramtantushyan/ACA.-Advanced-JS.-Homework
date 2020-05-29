function checkPalindrome1 (inputString) {
    let strLength = inputString.length;
    let tmp = Math.floor(strLength / 2);
    for (let i = 0; i < tmp; i++) {
        if (inputString[i] !== inputString[strLength - 1 - i]) {
            return false;
        }             
    }
    return true;
}

function checkPalindrome2 (inputString) {
    let tmp = Math.floor(inputString.length / 2);
    let strArray = [...inputString];
    let start = strArray.slice(0, tmp);
    let tail  = strArray.reverse().slice(0, tmp);
    if (start.toString() === tail.toString()) {
        return true;
    }
    return false;
}
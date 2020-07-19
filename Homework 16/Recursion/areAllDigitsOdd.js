function areAllDigitsOdd (number) {
    let numArray = String(number).split('');
    if(numArray.length = 0) {
        return true;
    }
    let digit = numArray.shift();
    if(digit % 2 === 0) {
        return false;
    } else {
       return areAllDigitsOdd(numArray.join(''));
    }
}
function sumOfDigits (number) {
    let strNumber = String(number);
    if(strNumber.length <= 1) {
        return number;
    }
    let result = strNumber.split('').reduce((sum, num)=>{return sum + (+num)}, 0);
    if (String(result).length <=1) {
        return result;
    }
        return sumOfDigits (String(result));
}
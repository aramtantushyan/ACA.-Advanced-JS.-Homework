function reduce (array, callbackFn = (acc, currentValue, i, array) => {}, initialValue) {
    if (initialValue === undefined && array.length === 0) {
        throw new TypeError('Some error');
    } else if (initialValue === undefined && array.length === 1) {
        return array[0];
    } else if (initialValue !== undefined && array.length === 0) {
        return initialValue;
    } else {
        if (initialValue === undefined) {
            i = 1;
            acc = array[0]
        } else {
            i = 0;
            acc = initialValue;
        }
    }
    for ( ; i < array.length; i++) {
        currentValue = array[i];
        acc = callbackFn(acc, currentValue, i, array);
    }
    return acc;
}
        
function getSumOFAbsValues (acc, currentValue, i, array) {
    return Math.abs(acc) + Math.abs(currentValue);
}

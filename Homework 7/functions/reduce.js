function reduce (array, callbackFn, initialValue) {
    let index;
    let acc;
    let currentValue;
    if (initialValue === undefined && array.length === 0) {
        throw new TypeError('Some error');
    } else if (initialValue === undefined && array.length === 1) {
        return array[0];
    } else if (initialValue !== undefined && array.length === 0) {
        return initialValue;
    } else {
        if (initialValue === undefined) {
            index = 1;
            acc = array[0]
        } else {
            index = 0;
            acc = initialValue;
        }
    }
    for (let i = index; i < array.length; i++) {
        currentValue = array[i];
        acc = callbackFn(acc, currentValue, i, array);
    }
    return acc;
}
        
function getSumOFAbsValues (acc, currentValue, i, array) {
    return Math.abs(acc) + Math.abs(currentValue);
}

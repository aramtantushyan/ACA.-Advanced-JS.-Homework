function map (array, callbackFn) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let currentItem = array[i];
            result.push(callbackFn(currentItem, i, array));
    }
    return result;
}

function toPowOfTwo (currentValue, index, array) {
    if (currentValue == undefined) {
        throw new ReferenceError(`\'currentValue\' is not defined`); // since 'currentValue' is required
    } else {
    return currentValue ** 2;
    }
}

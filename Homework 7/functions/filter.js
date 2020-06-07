function filter (array, callbackFn) {
    const currentArray = array; // *  
    let result = [];
    for (let i = 0; i < currentArray.length; i++) {
    // * / 'currentArray's length is taken to ensure 
    // that "Elements which are appended to the array 
    // after the call to filter() begins will not be visited by callback"
        let currentItem = array[i];
        if (callbackFn(currentItem, i, array)) {
            result.push(currentItem);
        }
    }
    return result;
}

function isEven (currentValue, i, index) {
    if (currentValue == undefined) {
        throw new ReferenceError(`\'currentValue\' is not defined`); // since 'currentValue' is required
    } else {
        return currentValue % 2 === 0;
    }
    
}

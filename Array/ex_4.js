//4
//includes
function includes (array, element, start = 0) {
    if(!Array.isArray(array)){
        return undefined;
    }
    for (let i = start; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}

//join
function join (array, separator = ',') {
    if(!Array.isArray(array)) {
        return undefined;
    }
    let resultStr = '';
    for (let i = 0; i < array.length; i++) {
        resultStr += array[i] + String(separator);
    }
    return resultStr;
}

//slice
function slice (array, start = 0, end = array.length) {
    if(!Array.isArray(array)) {
        return undefined;
    }
    if (start < 0){ 
        start = array.length + start;
    }
    if (end < 0){ 
        end = array.length + end;
    } 
    let newArray = [];
    for (let i = start; i < end; i++) {
        newArray.push(array[i]);
    }
    return newArray
}

//fill
function fill (array = [], element, start = 0, end = array.length) {
    if(!Array.isArray(array)) {
        return undefined;
    }
    if (start < 0) {
        start = 0;
    }
    if (end > array.length) {
        end = array.length;
    }
    for (let i = start; i < end; i++) {
        array[i] = element;
    }
    return array;
}

//findIndex
function isPositive(element){
    return element > 0;
}
function findIndex (array, isPositive) {
    for (let i = 0; i < array.length; i++) {
        if(Number.isInteger(array[i]) && isPositive(array[i])){
            return i;
        }
    }
    return -1;
}
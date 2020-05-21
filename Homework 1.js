// Homework 1
// -----------
// String
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

// 2
function uppercase (string, index) {
    let result = '';
    if (typeof string !== 'string' || !string || !Number.isInteger(index) || index < 0 || index > string.length-1){
        return undefined;
    } else {
        for(let i = 0; i < string.length; i++) {
            if(i !== index) {
                result += string[i];
            } else {
                result += string[i].toUpperCase();
            }
        }
        return result;
    }
}

//Array
// 1
function filterRAnge (array, a, b) {
    if (!Array.isArray(array)) {
        return undefined;
    } else if (b < a) { //if b is smaller then a replace them by each other
        let sum = a + b;
        a = b;
        b = sum-a;
    }
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] >= a && array[i]<=b){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// 2
function filterWordsByStartingLetter (array, letter) {
    if (!Array.isArray(array) || typeof letter !== 'string') {
        return undefined;
    }
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'string') { // In case array contains elements that are not strings
            newArray.push(array[i]);
            continue;
        } else if (!(array[i].toLowerCase().startsWith(letter.toLowerCase()))){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

//3
function findById (array, id) {
    for (let i = 0; i < array.length; i++) {
        for(let key in array[i]) {
            if(array[i][key] === id) {
                return array[i];
            }
        }
    }
    return 'No Data'
}

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
function slice (array, start = 0, end = array.length){
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

//Object
//1
function size (obj = {}) {
    let tmp = 0;
    for(let key in obj) {
        tmp +=1;
    }
    if(tmp === 0) {
        return 'Empty';
    } else {
        return tmp;
    }
}

//2
function isKeyIncluded (obj, key) {
    for (let prop in obj) {
        if (prop === key) {
            return true;
        }
    }
    return false;
}

//3
function isValueIncluded (obj, value) {
    for (let prop in obj) {
        if (obj[prop] === value) {
            return true;
        }
    }
    return false;
}
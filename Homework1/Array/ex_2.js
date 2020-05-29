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
function minPositiveEl (array) {
    let myArray = [...array];
    let minValue = Math.min(...myArray)
    if (myArray.length === 0) {
        return -1;
    } else if (minValue >= 0) {
        return minValue;
    } else {
        myArray.splice(myArray.indexOf(minValue), 1);
        return minPositiveEl (myArray);
    }
}
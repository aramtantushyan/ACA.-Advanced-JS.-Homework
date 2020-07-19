function removeFirstEl (array) {
    let newArray = [];
    function iter (array, index = 1) {
        if (array.length < 2) {
            return [];
        }
        newArray.push(array[index])
        index++;
        if (newArray.length === array.length-1) {
            return newArray;
        }
        return iter (array, index);
    }
    return iter(array);
}
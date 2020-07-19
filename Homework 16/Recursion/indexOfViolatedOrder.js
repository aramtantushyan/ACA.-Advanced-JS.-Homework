function indexOfViolatedOrder (array) {
    function iter (array, index = 0) {
        if (index === array.length) {
            return -1;
        } else if (array[index] > array [index + 1]) { 
            return index + 1;
        } else {
            index++;
            return iter (array, index);
        }
    }
    return iter(array);
}
function rotateArray (array, n) {
    function moveElement (array, count = 0) {
        if (n === 0) {
            return array;
        }

        let currentItem = (n > 0) ? array.shift() : array.pop();
        if (n > 0) {
            array.push(currentItem);
            count++;
        } else {
            array.unshift(currentItem);
            count--;
        }
        
        
        if (count === n) {
            return array;
        }
        return moveElement(array, count);
    }
    return moveElement(array);
}
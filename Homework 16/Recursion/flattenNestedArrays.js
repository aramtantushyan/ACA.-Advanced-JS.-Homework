function flattenNestedArrays (array) {
    let flattenedArray = [...array];
    function minorFlattener (arr) {
        let isFlattened = true;
        for (let i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])) {
                flattenedArray.splice(i, 1, ...arr[i]);
                isFlattened = false;
            }
        }
        if (isFlattened) {
            return flattenedArray;
        }
        return minorFlattener (flattenedArray);
    }
    return minorFlattener(array);
}
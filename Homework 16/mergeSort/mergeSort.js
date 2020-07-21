function mergeSort (array) {
    function divideUntilSingleEl (array) {
        let middle = Math.ceil(array.length/2);
        let arrayStart = array.slice(0, middle);
        let arrayEnd = array.slice(middle);
        if(array.length >= 2) {
            let arr1 = divideUntilSingleEl(arrayStart);
            let arr2 = divideUntilSingleEl(arrayEnd);
                if(arr1.length === 1 && arr2.length === 1) {
                    if (arr1[0] >= arr2[0]) {
                        return [...arr2, ...arr1];
                    }
                        return [...arr1, ...arr2];
                } else if (arr2[0] >= arr1[arr1.length-1]) {
                    let newArray = arr1.concat(arr2);
                    return [...newArray];
                } else if (arr2[arr2.length-1] <= arr1[0]) {
                    let newArray = arr2.concat(arr1);
                    return [...newArray];
                } else {
                    let tmpArray = arr1.concat(arr2);
                    let newArray = [];
                    function sortByMin (tmpArray){
                        if (tmpArray.length === 0) {
                            return newArray;
                        }
                        let min = Math.min(...tmpArray);
                        tmpArray.splice(tmpArray.indexOf(min), 1);
                        newArray.push(min);
                        return sortByMin(tmpArray);
                    }
                    return sortByMin(tmpArray);
                }
        }
        return [...array]
    }
    return divideUntilSingleEl(array);
}
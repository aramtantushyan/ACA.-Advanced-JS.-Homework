function mergeSort (array) {
    function divideUntilSingleEl (array) {debugger
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
            } else {
                let tempArray = arr1.concat(arr2);
                let newArray = [];
                for(let i = 0; i < arr2.length; i++) {
                    for(let j = 0; j < arr1.length; j++) {
                        
                    }
                }
            }
                            arr1.splice(j+1, 0, arr2[i]);
                        } else {
                            arr1.splice(j-1, 0, arr2[i]);
                        }
                    }  
                }
                    return [...arr1];
            }
        }
        return [...array]
    }
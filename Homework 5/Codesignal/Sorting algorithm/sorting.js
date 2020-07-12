function bubbleSort (items) {
    let sortedArray = [...items];
    let status = false;
    for(let i = 0; i < sortedArray.length; i++) {
        if(sortedArray[i+1] < sortedArray[i]) {
            let tmp = sortedArray[i+1];
            sortedArray[i+1] = sortedArray[i];
            sortedArray[i] = tmp;
            status = true;
        }
    }
    if(status) {
        return bubbleSort (sortedArray);
    } 
        return sortedArray;
}
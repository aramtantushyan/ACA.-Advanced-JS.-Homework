function find (collection, fn, startIndex = 0) {
    if (startIndex < 0) {startIndex = 0}; 
    for (let i = startIndex; i < collection.length; i++) {
        if(fn(array[i])){
            return array[i];
        }
    }
    return undefined;
}
//findIndex
function isPositive(element){
    return element > 0;
}

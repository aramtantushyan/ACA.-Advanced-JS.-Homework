function subsetsOfLength3 (array) {
    if(!Array.isArray(array)) {
        return undefined;
    }
    let newArray = array;
    let result =[];
    while (newArray.length >=3) {
        result.push(newArray.splice(0, 3));
    }
    if(newArray.length !== 0){
        result.push(newArray);
    }
    return result;
}

console.log(subsetsOfLength3([1, 2, 3, 4, 5, 6, 7, 8]))
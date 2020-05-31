function getSecondLargest (nums) {
    let max = Math.max(...nums);
    let newNums = [];
    for (let i of nums) {
        if(i !== max){
            newNums.push(i);
        }
    }
    return Math.max(...newNums);
}
function step (start, end, step) {
    if(!(end>=start)) {
        return 'Invalid format';
    }
    let newArray = [];
    for (let i = start; i <= end; step === 0 ?  i++ : i+=step) {
        newArray.push(i);
    }
    return newArray;
}
console.log(step(1, 10, 3))
console.log(step(1, 3, 0))
console.log(step(3, 1, 0))
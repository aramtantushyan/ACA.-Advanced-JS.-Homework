function getAverageAge (array) {
    let initialValue = 0;
    return array.reduce((acc, current, i, array) => {
        return (acc + current.age); 
    }, initialValue) / array.length;
}
function getAverageAge (array) {
    return array.reduce((acc, current, i, array) => {
        return (acc + current.age); 
    }, 0) / array.length;
}

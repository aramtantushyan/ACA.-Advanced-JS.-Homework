// 1
function filterRAnge (array, a, b) {
    if (!Array.isArray(array)) {
        return undefined;
    } else if (b < a) { //if b is smaller then a replace them by each other
        let sum = a + b;
        a = b;
        b = sum-a;
    }
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= a && array[i]<=b) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
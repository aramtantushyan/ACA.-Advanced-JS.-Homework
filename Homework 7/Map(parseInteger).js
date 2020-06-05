function parseInteger (array) {
    return array.map((string, i, array) => {
        let currentItem = array[i];
        if(Number.isNaN(parseInt(currentItem))) {
            return null;
        } else {
            return parseInt(currentItem);
        }
    })
}
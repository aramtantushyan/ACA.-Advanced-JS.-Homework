function parseInteger (array) {
    return array.map((string, i, array) => 
        if(Number.isNaN(parseInt(string)) {
            return null;
        } else {
            return parseInt(string);
        }
    })
}

//3
function isValueIncluded (obj, value) {
    for (let prop in obj) {
        if (obj[prop] === value) {
            return true;
        }
    }
    return false;
}
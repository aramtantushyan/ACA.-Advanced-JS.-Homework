//2
function isKeyIncluded (obj, key) {
    for (let prop in obj) {
        if (prop === key) {
            return true;
        }
    }
    return false;
}
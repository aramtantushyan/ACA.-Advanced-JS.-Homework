// 2
function uppercase (string, index) {
    let result = '';
    if (typeof string !== 'string' || !string || !Number.isInteger(index) || index < 0 || index > string.length-1) {
        return undefined;
    } else {
        for(let i = 0; i < string.length; i++) {
            if(i !== index) {
                result += string[i];
            } else {
                result += string[i].toUpperCase();
            }
        }
        return result;
    }
}
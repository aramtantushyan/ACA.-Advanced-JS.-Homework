//1
function size (obj = {}) {
    let tmp = 0;
    for(let key in obj) {
        tmp +=1;
    }
    if(tmp === 0) {
        return 'Empty';
    } else {
        return tmp;
    }
}
//3
function findById (array, id) {
    for (let i = 0; i < array.length; i++) {
        for(let key in array[i]) {
            if(array[i][key] === id) {
                return array[i];
            }
        }
    }
    return 'No Data'
}
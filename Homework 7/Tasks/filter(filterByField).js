function filterByField (array, field) {
    return array.filter((item, i, array) => {
        return item[field] === true;
    })
}
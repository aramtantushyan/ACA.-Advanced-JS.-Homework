function filterUsers (array) {
    return array.filter((item, i, array) => {
        return item.lang !== 'ru';
    })
}
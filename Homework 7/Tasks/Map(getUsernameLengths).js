function getUserNames (array) {
    return array.map((element, i, array) => {
        return element.username.length;
    });
}
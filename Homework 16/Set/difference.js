function difference (set1, set2) {
    let mySet = new Set (set1);
    for (let item of set1.values()) {
        if (set2.has(item)) {
            mySet.delete(item);
        }
    }
    return mySet;
}
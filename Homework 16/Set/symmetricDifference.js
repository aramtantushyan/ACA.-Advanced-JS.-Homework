function symmetricDifference (set1, set2) {
    let mySet = new Set (setA);
    for (let item of setB.values()) {
        if (mySet.has(item)) {
            mySet.delete(item);
            continue;
        }
        mySet.add(item);
    }
    return mySet;
}
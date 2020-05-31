function makeArrayConsecutive2(statues) {
    let min = Math.min(...statues);
    let max = Math.max(...statues);
    let tmp = 0;
    for (let i = min + 1; i < max; i++) {
        if (!statues.includes(i)) {
            tmp++;
        }
    }
    return tmp;
}
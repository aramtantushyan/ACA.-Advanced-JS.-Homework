// I guess it is unwelcome to use anything except switch statement for this tasl,
// but it is interesting which one is better from performance side? 
function getLetter1(s) {
    let letter;
    let arrayA = ['a', 'e', 'i', 'o', 'u'];
    let arrayB = ['b', 'c', 'd', 'f', 'g'];
    let arrayC = ['h', 'j', 'k', 'l', 'm'];
    let totalArray = [arrayA, arrayB, arrayC];
    let tmp;
    for (let i = 0; i < totalArray.length; i++) {
        if (totalArray[i].includes(s[0])) {
            tmp = i;
            break;
        }
    }
    switch (tmp) {
        case 0:
            letter = 'A';
            break;
        case 1:
            letter = 'B';
            break;
        case 2:
            letter = 'C';
            break;
        default:
            letter = 'D';
    }   
    return letter;
}

function getLetter2(s) {
    let letter;
    switch (s[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = 'A';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = 'B';
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = 'C';
            break;
        default:
            letter = 'D';
    }   
    return letter;
}
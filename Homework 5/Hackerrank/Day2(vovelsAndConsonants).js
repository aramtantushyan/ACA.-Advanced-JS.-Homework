function vowelsAndConsonants(s) {
    const vovels = ['a', 'e', 'i', 'o', 'u'];
    let strVovels = '';
    let strConsonants = '';
    for (let i = 0; i < s.length; i++) {
        if (vovels.includes(s[i])) {
            strVovels += s[i];
            strVovels += '\n';
        } else {
            strConsonants += s[i];
            strConsonants += '\n'
        }
    }
    console.log (`${strVovels.trim()}\n${strConsonants.trim()}`);
}

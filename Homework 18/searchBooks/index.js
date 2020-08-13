const search  = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

function normalizeInput (input) {
    let newStr = input.trim()
    .toLowerCase()
    .split(' ')
    .filter(el => el !== '')
    .join('+');
    return newStr;
}

function redirectToNewPage () {
    localStorage.setItem('searchValue', `${normalizeInput(search.value)}`);
    self.location = './searchResults/searchResults.html';
}

searchBtn.addEventListener('click', redirectToNewPage);
searchBtn.addEventListener('keydown', (e) => {
    if(e.code !== 'Enter') {
        return;
    }
    redirectToNewPage(search.value)
});

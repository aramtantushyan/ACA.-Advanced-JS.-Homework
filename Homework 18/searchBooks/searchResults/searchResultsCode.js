import {doGet} from "../../requestHelper/request.helper.js"

const searchResNumStr = document.querySelector('.resNum');
const searchResults = document.querySelector('.searchResults');
const pagination = document.querySelector('.pagination');
const book = localStorage.getItem('searchValue');
const mainFooter = document.querySelector('.main-footer');

function createPagination (number) {
    let pagesNum = Math.ceil(number / 100);
    for (let i = 1; i <= pagesNum; i++) {
        pagination.insertAdjacentHTML('beforeend', `<a id=${i}>${i}</a>`);
    }
}

function showResults (array) {
    array.forEach(element => {
        searchResults.insertAdjacentHTML('beforeend', `<div class='search-item'>
                                                        <p><b>Title:</b> ${element.title}</p>
                                                        <p><b>Author name:</b> ${element.author_name}</p>
                                                        <p><b>First publish year:</b> ${element.first_publish_year}</p>
                                                        <p><b>Subject:</b> ${element.subject ? element.subject.slice(0, 5) : ''}</p>
                                                       </div>`)
    });
}

function changePage (pageN) {
    searchResults.innerHTML = '';
    doGet(`http://openlibrary.org/search.json?q=${book}&page=${pageN}`)
    .then(res => showResults(res.docs))
    .catch((err) => {searchResNumStr.textContent = `Ooops something went wrong`;
                     pagination.classList.add('hide');
                     mainFooter.classList.add('main-footer__positioning');
                     console.log(err);
                    });
}

(function getResults () {
    doGet(`http://openlibrary.org/search.json?q=${book}`)
    .then((res) => {
    let resultsNum = res.numFound;
        if(resultsNum <= 0) {
            searchResNumStr.textContent = `0 results match your search`;
            pagination.classList.add('hide');
            mainFooter.classList.add('main-footer__positioning');
        } else {
            searchResNumStr.textContent = `${resultsNum} results match your search`;
            pagination.classList.remove('hide');
            mainFooter.classList.remove('main-footer__positioning');
            createPagination(resultsNum);
            showResults(res.docs);
        }
    })
    .catch((err) => {searchResNumStr.textContent = `Ooops something went wrong`;
                     pagination.classList.add('hide');
                     mainFooter.classList.add('main-footer__positioning');
                     console.log(err);
                    });
})(); 

pagination.addEventListener('click', (e) => changePage(e.target.id));
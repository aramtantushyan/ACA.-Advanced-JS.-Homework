import {doGet} from "/Homework 18/requestHelper/request.helper.js"

const searchResNumStr = document.querySelector('.resNum');
const searchResults = document.querySelector('.searchResults');
const pagination = document.querySelector('.pagination');
const paginationEnd = document.getElementById('paginationEnd');
const book = localStorage.getItem('searchValue');

function createPagination (number) {
    let pagesNum = Math.ceil(number / 100);
    for (let i = 1; i <= pagesNum; i++) {
        paginationEnd.insertAdjacentHTML('beforebegin', `<a id=${i}>${i}</a>`);
    }
}

// doGet(``)http://openlibrary.org/search.json?q=${book}&page=${i}
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

(function getResults () {
    doGet(`http://openlibrary.org/search.json?q=${book}`)
    .then((res) => {
    let resultsNum = res.numFound;
    searchResNumStr.textContent = `${resultsNum} results match your search`;
        if(resultsNum <= 0) {
            searchResults.classList.add('hide');
            pagination.classList.add('hide');
        } else {
            searchResults.classList.remove('hide');
            pagination.classList.remove('hide');
            createPagination(resultsNum);
            showResults(res.docs);
        }
    })
    .catch((err) => {searchResNumStr.textContent = `Ooops something went wrong`; 
                     searchResults.classList.add('hide');
                     pagination.classList.add('hide');
                     console.log(err);
                    });
})(); 
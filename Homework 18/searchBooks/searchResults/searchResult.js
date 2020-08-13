import {doGet} from '../requestHelper/request.helper.js';

function getBook () {
    let book = normalizeInput(search.value);
    if (book) {
        doGet(`http://openlibrary.org/search.json?q=${book}`)
        .then((res) => {let resultsNum = res.numFound;
        if(resultsNum <= 0) {

        }})
        .catch(err => console.log(err));
    }
}
import {renderCountryCards} from './helpers/render.helper.js';
import {debounce} from './helpers/debounce.helper.js';
import {getFromLocalStorage} from './helpers/localStorage.js';
import {getAllCountries} from './services/getCountriesData.js';
import {getCountryByName} from './services/getCountriesData.js';

const mainBody = document.querySelector('.main-body');
const viewCountry = document.querySelector('.view');
const favIcon = document.querySelector('.fav');
const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

function initPage () {
    let allCountriesData = getFromLocalStorage('allCountries');
    if (allCountriesData.length !== 0) {
        mainBody.innerHTML = '';
        renderCountryCards(mainBody, 'beforeend', allCountriesData);
    } else {
        getAllCountries();
        allCountriesData = getFromLocalStorage('allCountries');
        renderCountryCards(mainBody, 'beforeend', allCountriesData);
    }
}

function showSearchResults () {
    getCountryByName(search.value);
    const searchResults = getFromLocalStorage('searchResults');
    console.log(searchResults);
    mainBody.innerHTML = '';
    if (searchResults.length === 0) {
        mainBody.insertAdjacentHTML('beforeend', '<h1>0 results match your search.</h1>');
    } else if (search.value.trim() === '') {
        initPage();
    } else {
        renderCountryCards(mainBody, 'beforeend', searchResults);
        console.log(search.value);
    }
}

initPage();

search.addEventListener('keyup', debounce(showSearchResults, 200));
searchBtn.addEventListener('click', debounce(showSearchResults, 200));


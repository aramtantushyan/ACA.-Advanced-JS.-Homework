import {renderCountryCards} from './helpers/render.helper.js';
import {debounce} from './helpers/debounce.helper.js';
import {getFromLocalStorage} from './helpers/localStorage.js';
import {setToLocalStorage} from './helpers/localStorage.js'
import {redirectToOtherPage} from './helpers/redirect.helper.js'
import {fetchAllCountries} from './services/fetchCountriesData.js';
import {fetchCountryByName} from './services/fetchCountriesData.js';
import {getCountryData} from './helpers/data.helper.js';

const mainBody = document.querySelector('.main-body');
const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const favourites = document.getElementById('favourite');
const logout = document.getElementById('logout');


let favIcon;
let viewCountry;

const state = {};

function initPage () {
    try {
        let allCountriesData = getFromLocalStorage('allCountries');
        if (allCountriesData && allCountriesData.length !== 0) {
            mainBody.innerHTML = '';
            renderCountryCards(mainBody, 'beforeend', allCountriesData);
        } else {
            fetchAllCountries();
            //wait some time for ferchAllCountries function to write data to local storage
            setTimeout(() => {allCountriesData = getFromLocalStorage('allCountries');
            renderCountryCards(mainBody, 'beforeend', allCountriesData)}, 250);
            location.reload();   
        }
        favIcon = document.querySelectorAll('.fav');
        viewCountry = document.querySelectorAll('.view');
        favIcon.forEach((e) => {e.addEventListener('click', (event) => addToFavourites(event.target.id)) });
        viewCountry.forEach((e) => {e.addEventListener('click', (event)=> console.log(event.target.id)) });
    } catch (error) {
        console.log(error);
    }
}

function showSearchResults () {
    fetchCountryByName(search.value);
    const searchResults = getFromLocalStorage('searchResults');
    console.log(searchResults);
    mainBody.innerHTML = '';
    if (searchResults && searchResults.length === 0) {
        mainBody.insertAdjacentHTML('beforeend', '<h1>0 results match your search.</h1>');
    } else if (search.value.trim() === '') {
        initPage();
    } else {
        renderCountryCards(mainBody, 'beforeend', searchResults);
        console.log(search.value);
    }
}

function addToFavourites (country) {
    const favCountryData = getCountryData(country);
    const favourites = getFromLocalStorage('favourites');
    if (favourites) {
        for (let elem of favourites) {
            if(elem.name === country) {
                return;
            }
        }
        const newFavourites = [...favourites, favCountryData];
        setToLocalStorage('favourites', newFavourites);
    } else {
        setToLocalStorage('favourites', [favCountryData]);
    }
}

initPage();

search.addEventListener('keyup', debounce(showSearchResults, 200));
searchBtn.addEventListener('click', debounce(showSearchResults, 200));
logout.addEventListener('click', () => redirectToOtherPage('../../index.html'));

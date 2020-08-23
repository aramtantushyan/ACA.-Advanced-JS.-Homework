import {renderCountryCards} from './helpers/render.helper.js';
import {debounce} from './helpers/debounce.helper.js';
import {getCountriesPreviewData} from './services/getAllCountries.js';

const mainBody = document.querySelector('.main-body');
const viewCountry = document.querySelector('.view');
const favIcon = document.querySelector('.fav');

const allCountriesData = JSON.parse(localStorage.getItem('allCountries'));

getCountriesPreviewData();
renderCountryCards(mainBody, 'beforeend', allCountriesData);

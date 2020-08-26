import {renderCountryCards} from './helpers/render.helper.js';
import {getFromLocalStorage, setToLocalStorage} from './helpers/localStorage.js';
import {redirectToOtherPage} from './helpers/redirect.helper.js'
import {getCountryData} from './helpers/data.helper.js';
import {setViewedCountryData} from './helpers/data.helper.js';
import {redirectToViewedCountry} from './helpers/redirect.helper.js';

const mainBody = document.querySelector('.main-body');
const logout = document.getElementById('logout');

let viewCountry;

 


function initPage () {
    try {
        let allFavCountries = getFromLocalStorage('favourites');
        mainBody.innerHTML = '';
        if (allFavCountries && allFavCountries.length !== 0) {
            renderCountryCards(mainBody, 'beforeend', allFavCountries);
        } else {
            mainBody.insertAdjacentHTML('beforeend', '<h1>There are no favourite countries yet</h1>');
        }
        viewCountry = document.querySelectorAll('.view');
        viewCountry.forEach((e) => {e.addEventListener('click', (event) => redirectToOtherPage('')) });
    } catch (error) {
        console.log(error);
    }
}

initPage();


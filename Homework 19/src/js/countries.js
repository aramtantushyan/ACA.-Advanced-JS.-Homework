import {doGet} from './helpers/request.helper.js';
import {renderCountryCards} from './helpers/render.helper.js';

const mainBody = document.querySelector('.main-body');
const viewCountry = document.querySelector('.view');
const favIcon = document.querySelector('.fav');

function createDataObj (el) {
    const obj = {};
    obj.name = el.name;
    obj.capital = el.capital;
    obj.flag = el.flag;
    obj.language = el.languages[0].name;
    obj.currency = el.currencies[0].code;
    return obj;
}

async function getCountriesPreviewData () {
    try {
        const data = await doGet('https://restcountries.eu/rest/v2/all?fields=name;capital;flag;languages;currencies');
        const arrangedData = await data.map((element) => createDataObj(element));
        renderCountryCards(mainBody, 'beforeend', arrangedData);
    } catch (error) {
        throw new Error (error.text);
    }
}

getCountriesPreviewData();
import {doGet} from './requestHelper/request.helper.js';
import {renderCountryCards} from './renderHelper/render.helper.js';

const mainBody = document.querySelector('.main-body');

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
        const filteredData = await data.map((element) => createDataObj(element));
        renderCountryCards(mainBody, 'beforeend', filteredData);
    } catch (error) {
        throw new Error (error.text);
    }
}

getCountriesPreviewData();
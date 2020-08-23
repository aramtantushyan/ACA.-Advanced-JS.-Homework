import {doGet} from '../helpers/request.helper.js';

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
    } catch (error) {
        throw new Error (error);
    }
}

export {getCountriesPreviewData};
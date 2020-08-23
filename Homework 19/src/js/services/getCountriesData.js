import {doGet} from '../helpers/request.helper.js';
import {setToLocalStorage} from '../helpers/localStorage.js';

function createDataObj (el) {
    const obj = {};
    obj.name = el.name;
    obj.capital = el.capital;
    obj.flag = el.flag;
    obj.language = el.languages[0].name;
    obj.currency = el.currencies[0].code;
    return obj;
}

async function request (countryName, localStorageKey) {
    try {
        const data = await doGet(`https://restcountries.eu/rest/v2/${countryName}?fields=name;capital;flag;languages;currencies`);
        const arrangedData = await data.map((element) => createDataObj(element));
        setToLocalStorage(localStorageKey, arrangedData);   
    } catch (error) {
        setToLocalStorage(localStorageKey, []);
        throw new Error (error);
    }
}

function getAllCountries () {
    const searchFor = 'all';
    const localStorageKey = 'allCountries';
    request(searchFor, localStorageKey);
}

function getCountryByName (name) {
    const searchFor = `name/${name}`;
    const localStorageKey = 'searchResults';
    request(searchFor, localStorageKey);
}

export {getAllCountries};
export {getCountryByName};
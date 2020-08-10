import { doGet } from "../requestHelper/request.helper.js";

const mainBody = document.querySelector('.main-body');

function render (array) {
    for (let element of array) {
        let newUlHtml = `<ul class="main-body__ul">
        <li class="main-body__ul__item">Title:<p class="main-body__item">${element.title}</p></li>
        <li class="main-body__ul__item">Description:<p class="main-body__item">${element.description}</p></li>
        <li class="main-body__ul__item">Director:<p class="main-body__item">${element.director}</p></li>
        <li class="main-body__ul__item">Producer:<p class="main-body__item">${element.producer}</p></li>
        <li class="main-body__ul__item">Release date:<p class="main-body__item">${element.release_date}</p></li>
        </ul>`;
        mainBody.insertAdjacentHTML('beforeend', newUlHtml);         
    };
}

doGet('https://ghibliapi.herokuapp.com/films').then((res) => render(res)).catch((err) => console.log(err));
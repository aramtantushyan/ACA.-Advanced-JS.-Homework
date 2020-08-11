import { doGet }  from "../requestHelper/request.helper.js";

const img = document.querySelector('.main-body__dog_img');

function getDogImg (value) {
    if(value !== 'default') {
        doGet(`https://dog.ceo/api/breed/${value}/images/random`)
        .then(res => {img.src = res.message})
        .catch(err => console.log(err));
    }
}
import { doGet }  from "../requestHelper/request.helper.js";

const img = document.querySelector('.main-body__dog_img');
const selector = document.getElementById('dogs');

function getDogImg () {
    const selectedBreed = selector.value;
    if(selectedBreed !== 'default') {
        doGet(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
        .then(res => {img.src = res.message})
        .catch(err => console.log(err));
    } else {
        img.src = './img/img_placeholder.png';
    }
}

selector.addEventListener('change', getDogImg);
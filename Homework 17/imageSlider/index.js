let nextBtn = document.querySelector('.next')
let previousBtn = document.querySelector('.previous')
let imgList = document.querySelector('.main-slider')
let images = imgList.children

function slideNext () {
    imgList.prepend(imgList.lastElementChild);
}

function slidePrevious () {
    imgList.append(imgList.firstElementChild);
}


nextBtn.addEventListener('click', slideNext);

previousBtn.addEventListener('click', slidePrevious);

(function periodicSlide () {
    slideNext();
    setTimeout(periodicSlide, 5000);
})();
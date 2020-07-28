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

(function periodicSlide () {
    slideNext();
    setTimeout(periodicSlide, 6000);
})();

nextBtn.addEventListener('click', slideNext);
previousBtn.addEventListener('click', slidePrevious);
function showDate () {
    let newDate = new Date ();
    dateBlock.textContent = newDate;
}

let mainBody = document.querySelector('.main-body');
let dateButton = document.querySelector('.main-body button');
let dateBlock = mainBody.querySelector('.main-body time');

dateButton.addEventListener('click', showDate);
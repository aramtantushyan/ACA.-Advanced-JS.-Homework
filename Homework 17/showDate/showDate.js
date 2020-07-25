function showDate () {
    let newDate = new Date ();
    let dateBlock = mainBody.querySelector('.main-body time');
    if (dateBlock) {
        dateBlock.innerHTML = newDate;
    } else {
        time = document.createElement('time');
        mainBody.append(time);
        mainBody.querySelector('.main-body time').innerHTML = newDate;
    }
}

let mainBody = document.querySelector('.main-body');
let dateButton = document.querySelector('.main-body button');

dateButton.addEventListener('click', showDate);
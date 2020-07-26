let state = [];

let schedule = document.querySelector('.schedule')
let listItems = document.querySelectorAll('.schedule-item');

(function initStateObj () {
    for (let i = 0; i < listItems.length; i++) {
        state.push({isFinished:false, id:i});
    }
})();

function markAsDone (event) {
    let itemId = Number(event.target.id) 
    if(itemId === 0 || itemId > 0 && state[itemId - 1].isFinished === true) {
        state[itemId].isFinished = true;
        listItems[itemId].innerHTML = `<del>${listItems[itemId].textContent}</del>`
    } else {
        alert('You must accomplish the previous point(s)');
    }
    isScheduleComplete(state);
}

function isScheduleComplete (state) {
    for(let el of state) {
        if(el.isFinished === false) {
            return;
        }
    }
    alert("You have completed today's tasks");
}

schedule.addEventListener('click', markAsDone)
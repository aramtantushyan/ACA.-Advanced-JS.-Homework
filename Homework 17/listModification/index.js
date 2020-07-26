let state = [];

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
    }
    alert('You must accomplish the previous point');
    isScheduleComplete(state);
}

isScheduleComplete (state) {
    let leftTasks = state.filter((element) => {element.isFinished !== true});
    if (leftTasks.length === 0) {
        alert("You have completed today's tasks");
    }
}

let schedule = document.querySelector('.schedule')
schedule.addEventListener('click', markAsDone)
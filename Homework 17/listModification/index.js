let state = [];

let listItems = document.querySelectorAll('.schedule-item')
(function initStateObj () {
    for (let i = 0; i < listItems.length; i++) {
        state.push({isFinished:false, id:i});
    }
})();

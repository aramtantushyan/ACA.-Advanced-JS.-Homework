const name = document.getElementById('name');
const age = document.getElementById('age');
const grade = document.getElementById('grade');
const tableBody = document.querySelector('.students-info__body');
const inputs = document.querySelector('.students-info__inputs')
const sortBtn = document.getElementById('sortBtn');
const names = document.getElementsByClassName('name-item');
const ages = document.getElementsByClassName('age-item');
const grades = document.getElementsByClassName('grade-item');
let sortBtnValues = ["&#8645", "&#8593", "&#8595"];
const sortBtnNames = ['Default', 'Ascending', 'Descending'];
let arraysIndex = 0;
const stateData = [];

function initializeData () { 
    for (i = 0; i < tableBody.childElementCount; i++) {
        stateData.push({name: names[i].textContent, 
        age: ages[i].textContent,
        grade: grades[i].textContent,
        id: i});
    }
}

function validateInputs (name, age, grade) {
    if(name.trim() !== '' && age.trim() !== '' && grade.trim() !== '') {
        return true;
    }
    return false;
}

function initInputs () {
    name.value = '';
    age.value = '';
    grade.value = '';
}

function getMaxId () {
    let idArray = [];
    stateData.forEach((element) => idArray.push(element.id));
    let maxId = Math.max(...idArray);
    return maxId;
}

function editBtnNameAndValue () {
    if (arraysIndex === sortBtnValues.length-1) {
        arraysIndex = 0;
    } else {
        arraysIndex++;
    }
    sortBtn.value = sortBtnValues[arraysIndex]; //after changing value html shows code instead of arrow? how to fix it? 
    sortBtn.name = sortBtnNames[arraysIndex];
}

function render () {
    editBtnNameAndValue();
    stateData.sort(function arraySorting (a, b) {
        switch (sortBtn.name) {
            case 'Default':
                return a.id - b.id;
            case 'Ascending':
                return a.age - b.age;
            case 'Descending':
                return b.age - a.age;
        }
    });

    for(i = 0; i < tableBody.childElementCount; i++) {
        tableBody.children[i].innerHTML = `<td class="name-item">${stateData[i].name}</td>
                                           <td class="age-item">${stateData[i].age}</td>
                                           <td class="grade-item">${stateData[i].grade}</td>`;
    }
}

initializeData();

sortBtn.addEventListener('click', render);

inputs.addEventListener('keydown', (e) => {
    if(e.code !== 'Enter') {
        return;
    } else if(validateInputs(name.value, age.value, grade.value)) {debugger
        let newRow = `<tr><td>${name.value}</td><td>${age.value}</td><td>${grade.value}</td></tr>`
        tableBody.insertAdjacentHTML('beforeend', `${newRow}`);

        stateData.push({name: name.value, 
        age: age.value,
        grade: grade.value,
        id: getMaxId() + 1});

        initInputs();
    } else {
        alert('Invalid inputs');
    }
});

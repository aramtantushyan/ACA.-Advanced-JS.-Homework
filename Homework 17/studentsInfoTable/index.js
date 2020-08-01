const name = document.getElementById('name');
const age = document.getElementById('age');
const grade = document.getElementById('grade');
const tableBody = document.querySelector('.students-info__body');
const inputs = document.querySelector('.students-info__inputs')
const sortBtn = document.getElementById('sortBtn');
const names = document.getElementsByClassName('name-item');
const ages = document.getElementsByClassName('age-item');
const grades = document.getElementsByClassName('grade-item');
let arrows = ['&#8593', '&#8595', ''];
const initialData = [];

function initializeData () { 
    for (i = 0; i < tableBody.childElementCount; i++) {
        initialData.push({name: names[i].textContent, 
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

inputs.addEventListener('keydown', (e) => {
    if(e.code !== 'Enter') {
        return;
    } else if(validateInputs(name.value, age.value, grade.value)) {
        let newRow = `<tr><td>${name.value}</td><td>${age.value}</td><td>${grade.value}</td></tr>`
        tableBody.insertAdjacentHTML('beforeend', `${newRow}`);
        initInputs();
    } else {
        alert('Invalid inputs');
    }
})

initializeData();




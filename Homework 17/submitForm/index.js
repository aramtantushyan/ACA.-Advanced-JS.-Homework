function alertFormJson () {
    let formData = document.querySelector('.main-form').children;
    let objData = {};
    for(let i = 0; i < formData.length-1; i +=3) {
        let currentEl = formData[i];
        let nextEl = formData[i+1];
        objData[currentEl.innerText] = nextEl.value;
    }
    let alertData = JSON.stringify(objData);
    alert(alertData);
}

let submit = document.getElementById('submit');

submit.addEventListener('click', alertFormJson);
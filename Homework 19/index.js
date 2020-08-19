const eyeIcon = document.querySelector('.ion-icon__eye');
const password = document.getElementById('password');
const username = document.getElementById('username');

function showHidePassword () {
    if (password.type === "password") {
        password.type = "text";
        eyeIcon.name = 'eye-off-outline';
      } else {
        password.type = "password";
        eyeIcon.name = 'eye-outline';
      }
}

function validateInput (target) {
    let inputValue = target.value;
    let iconId = (target.id === 'username') ? 1 : 2;
    let check = document.querySelector(`.ion-icon${iconId}_check`); 
    let close = document.querySelector(`.ion-icon${iconId}_close`); 
    if (inputValue.length < 5) {
        close.classList.add('visible');
        check.classList.remove('visible');
    } else {
        check.classList.add('visible');
        close.classList.remove('visible');
    }
}

username.addEventListener('blur', (e) => {validateInput(e.target)});
password.addEventListener('blur', (e) => {validateInput(e.target)});
eyeIcon.addEventListener('click', showHidePassword);
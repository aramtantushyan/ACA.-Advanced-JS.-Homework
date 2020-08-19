const eyeIcon = document.querySelector('.ion-icon__eye');
const username = document.getElementById('1');
const password = document.getElementById('2');
const errorText1 = document.querySelector('.error1');
const loginBlock = document.querySelector('.main-body__login');

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
    const inputValue = target.value;
    const targetId = target.id;
    const check = document.querySelector(`.ion-icon${targetId}_check`); 
    const close = document.querySelector(`.ion-icon${targetId}_close`);
    const errorText = document.querySelector(`.error${targetId}`);
    if (inputValue.trim().length < 5) {
        close.classList.add('visible');
        check.classList.remove('visible');
        errorText.classList.add('visible');
        return false;
    } else {
        check.classList.add('visible');
        close.classList.remove('visible');
        errorText.classList.remove('visible');
        return true;
    }
}

function validateUsernamePassword () {
    return (validateInput(username) && validateInput(password));
}

username.addEventListener('keyup', (e) => {validateInput(e.target)})
password.addEventListener('keyup', (e) => {validateInput(e.target)})
username.addEventListener('blur', (e) => {validateInput(e.target)});
password.addEventListener('blur', (e) => {validateInput(e.target)});
loginBlock.addEventListener('keydown', (e) => {
    if(e.key === 'return') {
        if(validateUsernamePassword) {
            
        }
    }
})
eyeIcon.addEventListener('click', showHidePassword);
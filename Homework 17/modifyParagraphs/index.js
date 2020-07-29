function validateHexBody (input) {
    let lowercaseStr = input.toLowerCase();
    let result = true;
    let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let letters = ['a', 'b', 'c', 'd', 'e', 'f']
    for (let char of lowercaseStr) {
        if (!(digits.includes(char) || letters.includes(char))) {
            result = false;
            return result;
        }
    }
    return result;
}

function isHexColor (color) {
    if (color[0] === '#' && 
        color.length <=7 && 
        color.trim() !== '' && 
        typeof color === 'string' &&
        validateHexBody(color.slice(1))) {
        return true;
    }
    return false;
}

function validateInputs (color1, color2) {
    return (isHexColor(color1) && isHexColor(color2))
}

function modifyColors () {
    if (validateInputs(textColor.value, backgroundColor.value)) {
        paragraphs.forEach((element) => {
            element.style.color = textColor.value;
            element.style.backgroundColor = backgroundColor.value;
        })
        return;
    }
    alert('Wrong inputs');
}

let textColor = document.querySelector('.inputs').firstElementChild; 
let backgroundColor = document.querySelector('.inputs').lastElementChild; 
let apply = document.querySelector('.applyBtn').lastElementChild;
let paragraphs = Array.from(document.querySelector('.main-paragraphs').children);

apply.addEventListener('click', modifyColors);
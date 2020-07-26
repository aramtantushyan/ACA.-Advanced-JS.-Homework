const mainInput = document.getElementById('main-input1');
const parallelInput = document.getElementById('main-input2');

function showParallelText () {
    parallelInput.value = mainInput.value;
}

mainInput.addEventListener('keyup', showParallelText);
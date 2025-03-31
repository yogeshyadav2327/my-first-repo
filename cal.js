const displayElement = document.getElementById('display');

function appendValue(value) {
    displayElement.value += value;
}

function clearDisplay() {
    displayElement.value = "";
}

function calculate() {
    try {
        displayElement.value = eval(displayElement.value);
    } catch {
        displayElement.value = 'Error';
    }
}
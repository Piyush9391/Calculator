let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '';
}

function appendToDisplay(value) {
    display.innerText += value;
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Escape') {
        clearDisplay();
    } else if (event.key === 'Backspace') {
        document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
    } else if (!isNaN(event.key) || event.key === '.' || ['+', '-', '*', '/'].includes(event.key)) {
        appendToDisplay(event.key);
    }
});

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const expression = document.getElementById('display').value;
    try {
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateAdvanced(operation) {
    const value = parseFloat(document.getElementById('display').value);
    let result;
    switch (operation) {
        case 'sqrt':
            result = Math.sqrt(value);
            break;
        case 'sin':
            result = Math.sin(value);
            break;
        case 'cos':
            result = Math.cos(value);
            break;
        case 'tan':
            result = Math.tan(value);
            break;
        case 'log':
            result = Math.log(value);
            break;
    }
    document.getElementById('display').value = result;
}

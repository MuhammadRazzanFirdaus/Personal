function appendToDisplay(value) {
    let display = document.getElementById('display');
    let currentValue = display.value;

    // Jika layar kosong dan nilai yang akan ditambahkan adalah '0', tidak lakukan apa-apa
    if (currentValue === '0' && value === '') {
        return;
    }

    // Jika layar sudah berisi '0' dan nilai yang akan ditambahkan adalah '0', tidak lakukan apa-apa
    if (currentValue === '0' && value === '0') {
        return;
    }

    // Jika layar berisi '0' dan nilai yang akan ditambahkan bukan operator, ganti '0' dengan nilai baru
    if (currentValue === '0' && !isOperator(value)) {
        display.value = value;
    } else {
        display.value += value; // Tambahkan nilai ke display
    }
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
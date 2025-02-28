const display = document.getElementById('display');
    
// Menambahkan angka atau operator ke tampilan
function appendToDisplay(value) {
  let current = display.value;
  if (current === '0' && value !== '.') {
    display.value = value;
  } else {
    display.value += value;
  }
}

// Menghapus seluruh tampilan
function clearDisplay() { display.value = '0'; }

// Menghapus karakter terakhir di tampilan
function deleteLast() { display.value = display.value.slice(0, -1) || '0'; }

// Menjalankan operasi matematika tertentu (seperti sin, cos, log, dll.)
function operate(fn, checkNegative = false) {
  let x = parseFloat(display.value);
  if (isNaN(x) || (checkNegative && x < 0)) {
    display.value = 'Error';
  } else {
    display.value = fn(x);
  }
}

// Menetapkan nilai konstanta seperti π dan e
function setConstant(val) { display.value = display.value === '0' ? val : display.value + val; }

// Menghitung ekspresi matematika yang diketik pengguna
function calculate() {
  try {
    let expr = display.value.replace(/mod/g, '%').replace(/(\d+)\^(\d+)/g, 'Math.pow($1,$2)');
    let result = eval(expr);
    display.value = isNaN(result) ? 'Error' : result;
  } catch (e) {
    display.value = 'Error';
  }
}

// Menangani input keyboard
document.addEventListener('keydown', function(e) {
  const validKeys = '0123456789+-*/().%^';
  if (validKeys.includes(e.key)) {
    appendToDisplay(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    deleteLast();
  } else if (e.key === 'Escape') {
    clearDisplay();
  } else {
    e.preventDefault();
  }
});
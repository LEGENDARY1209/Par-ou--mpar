const checkBtn = document.getElementById('checkBtn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    const numberInput = document.getElementById('number');
    const number = parseInt(numberInput.value);

    if (isNaN(number)) {
        result.textContent = 'Por favor, digite um número válido.';
        result.style.color = 'red';
    } else {
        if (number % 2 === 0) {
            result.textContent = 'O número é par.';
            result.style.color = 'green';
        } else {
            result.textContent = 'O número é ímpar.';
            result.style.color = 'blue';
        }
    }
});

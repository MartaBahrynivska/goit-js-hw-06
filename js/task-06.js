const validateInput = document.getElementById('validation-input');
validateInput.addEventListener('blur', changeBorderColor);


function changeBorderColor(event) {
    const inputDataLength = Number(validateInput.dataset.length);
    const inputValueLength = Number(validateInput.value.trim().length);

    if (inputValueLength === inputDataLength) {
        validateInput.classList.add('valid');
        validateInput.classList.remove('invalid');
    } else {
        validateInput.classList.remove('valid');
        validateInput.classList.add('invalid');
    }
}
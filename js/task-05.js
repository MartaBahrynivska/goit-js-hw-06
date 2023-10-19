const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const inputValue = ({ currentTarget }) => {
    if (currentTarget.value.trim() !== '') {
        outputName.textContent = currentTarget.value.trim();
    } else {
        outputName.textContent = 'Anonymous';
    }
};

inputName.addEventListener('input', inputValue);
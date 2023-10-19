let counterValue = 0;

const valueChange = document.getElementById('value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');


const onClickDecrementBtn = (event) => {
    counterValue -= 1;
    valueChange.textContent = counterValue;
};

const onClickIncrementBtn = (event) => {
    counterValue += 1;
    valueChange.textContent = counterValue;
};

decrementButton.addEventListener('click', onClickDecrementBtn);
incrementButton.addEventListener('click', onClickIncrementBtn);
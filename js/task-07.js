const inputRange = document.getElementById('font-size-control');
const textSize = document.getElementById('text');


const textSizeControl = ({ currentTarget }) =>
    (textSize.style.fontSize = `${currentTarget.value}px`);


inputRange.addEventListener('input', textSizeControl);
const submitForm = document.querySelector('.login-form');
submitForm.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt)  {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;

    if (!email.value.trim() || !password.value.trim()) {
        return alert('Please fill in all the required fields!');
    } else {
        const data = {
            email: email.value,
            password: password.value,
        }

        console.log(data);
        evt.currentTarget.reset();
    }
}

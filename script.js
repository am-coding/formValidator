const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const form = document.getElementById('form');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const cPasswordError = document.getElementById('cPasswordError');

form.addEventListener('submit', (e) => {
    
    let messages = [];
    if (name.value === '' || name.value === null) {
        nameError.textContent = 'Name cannot be blank!';
        e.preventDefault();
    }

    if (name.value.length > 0 && name.value.length < 3) {
        nameError.textContent = 'Name is too short!';
        e.preventDefault();
    }

    if (email.value === '' || email.value === null) {
        emailError.textContent = 'Email is too short!';
        e.preventDefault();
    }

    if (password.value.length < 6) {
        passwordError.textContent = 'Password must be longer than 6';
        e.preventDefault();
    }

    if (!email.validity.valid) {
        emailError.textContent = 'Enter correct Email';
    }

    if(password.value !== confirmPassword.value) {
        cPasswordError.textContent = 'Password did not match';
    }

});
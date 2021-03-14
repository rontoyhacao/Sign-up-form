const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue == '') {
        setErrorFor(username, 'Please enter a username');
    }
    else {
        setSuccessFor(username);
    }

    if(emailValue == '') {
        setErrorFor(email, 'Please enter an email address');
    }
    else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Please enter a valid email address');
    }
    else {
        setSuccessFor(email);
    }

    if(passwordValue == '') {
        setErrorFor(password, 'Please enter a password');
    }
    else {
        setSuccessFor(password);
    }

    if(password2Value == '') {
        setErrorFor(password2, 'Please re-enter password');
    }
    else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords do not match');
    }
    else {
        setSuccessFor(password2);
    } 
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('.validate');
    formControl.className = '.input-container error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = '.input-container success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/.test(email);
}

function displayPassword() {
    if(password.type && password2.type == 'password') {
        password.type = 'text';
        password2.type = 'text';
    }
    else {
        password.type = 'password';
        password2.type = 'password';
    }
}
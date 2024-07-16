// Show and hide different forms
document.getElementById('showRegister').addEventListener('click', function() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'block';
});

document.getElementById('showLoginFromRegister').addEventListener('click', function() {
    document.querySelector('.register-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});

document.getElementById('showForgotPassword').addEventListener('click', function() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.forgot-password-container').style.display = 'block';
});

document.getElementById('showLoginFromForgotPassword').addEventListener('click', function() {
    document.querySelector('.forgot-password-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});

// Mock user storage
const users = JSON.parse(localStorage.getItem('users')) || {};

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const message = document.getElementById('loginMessage');

    if (users[username] && users[username] === password) {
        message.style.color = 'green';
        message.innerText = 'Login successful!';
    } else {
        message.style.color = 'red';
        message.innerText = 'Invalid username or password';
    }
});

// Handle register form submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const message = document.getElementById('registerMessage');

    if (users[username]) {
        message.style.color = 'red';
        message.innerText = 'Username already exists';
    } else {
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        message.style.color = 'green';
        message.innerText = 'Registration successful!';
    }
});

// Handle forgot password form submission
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('forgotPasswordUsername').value;
    const message = document.getElementById('forgotPasswordMessage');

    if (users[username]) {
        message.style.color = 'green';
        message.innerText = `Password for ${username} is "${users[username]}"`;
    } else {
        message.style.color = 'red';
        message.innerText = 'Username not found';
    }
});

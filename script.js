document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Mock login check
    if (username === 'user' && password === 'password') {
        message.style.color = 'green';
        message.innerText = 'Login successful!';
    } else {
        message.style.color = 'red';
        message.innerText = 'Invalid username or password';
    }
});

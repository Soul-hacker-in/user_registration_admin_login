// Simulating data storage in the browser's local storage
const userData = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('user-login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = userData.find(u => u.username === username && u.password === password);

    if (user) {
        alert('Login successful!');
        // Redirect or perform actions after successful login
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

document.getElementById('user-registration-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const regUsername = document.getElementById('reg-username').value;
    const regPassword = document.getElementById('reg-password').value;

    const existingUser = userData.find(u => u.username === regUsername);

    if (existingUser) {
        alert('Username already exists. Please choose a different one.');
    } else {
        const newUser = { username: regUsername, password: regPassword };
        userData.push(newUser);
        localStorage.setItem('users', JSON.stringify(userData));
        alert('Registration successful! You can now login.');
        // Redirect or perform actions after successful registration
    }
});

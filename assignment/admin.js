// Simulating data storage in the browser's local storage
const userData = JSON.parse(localStorage.getItem('users')) || [];

const userList = document.getElementById('user-list');

// Displaying users in the admin panel
function displayUsers() {
    userList.innerHTML = '';
    userData.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `Username: ${user.username} | Password: ${user.password}`;
        userList.appendChild(li);
    });
}

// Initial display when the admin panel is loaded
displayUsers();

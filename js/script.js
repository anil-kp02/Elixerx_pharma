document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Logged in successfully!');
    // Here you would typically handle authentication, like calling an API
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('User registered successfully!');
    // Here you would typically handle the user creation, like sending the data to a server
});
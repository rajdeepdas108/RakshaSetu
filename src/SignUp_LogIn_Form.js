const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// Toggle between login and register forms
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Open index.html in a new tab when Register or Login button is clicked
const registerFormButton = document.querySelector('.form-box.register .btn');
const loginFormButton = document.querySelector('.form-box.login .btn');

registerFormButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    window.open('index2.html', '_blank');
});

loginFormButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    window.open("index2.html", "_blank");
});
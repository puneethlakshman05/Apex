// Tab switching
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
loginTab.onclick = () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.style.display = '';
    registerForm.style.display = 'none';
};
registerTab.onclick = () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.style.display = '';
    loginForm.style.display = 'none';
};

// Register
registerForm.onsubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirm = document.getElementById('registerConfirm').value;
    const msg = document.getElementById('registerMessage');
    if (password !== confirm) {
        msg.textContent = "Passwords do not match!";
        return;
    }
    localStorage.setItem('user_' + email, JSON.stringify({ email, password }));
    msg.style.color = "green";
    msg.textContent = "Registration successful! Please login.";
    setTimeout(() => {
        loginTab.click();
        msg.textContent = "";
    }, 1200);
};

// Login
loginForm.onsubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const msg = document.getElementById('loginMessage');
    const user = JSON.parse(localStorage.getItem('user_' + email));
    if (!user || user.password !== password) {
        msg.textContent = "Invalid email or password!";
        return;
    }
    msg.style.color = "green";
    msg.textContent = "Login successful!";
    localStorage.setItem('currentUser', email);
    setTimeout(() => {
        window.location.href = "products.html";
    }, 1000);
};
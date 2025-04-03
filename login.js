// Mock database for demonstration
const USERS = [
    { username: "amna@svnu.edu", password: "12345678" },
    { username: "hana@svnu.edu", password: "12345678" },
    { username: "tasneem@svnu.edu", password: "12345678" },
    { username: "sara@svnu.edu", password: "12345678" },
    { username: "areej@svnu.edu", password: "12345678" },
    { username: "mai@svnu.edu", password: "12345678" }
];

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginBtn = document.getElementById('login-btn');
    const errorMessage = document.getElementById('error-message');
    
    // Original button text
    const originalBtnText = loginBtn.innerHTML;
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Clear previous error
        errorMessage.style.display = 'none';
        
        // Basic validation
        if (!username || !password) {
            errorMessage.textContent = 'Please enter both username and password';
            errorMessage.style.display = 'block';
            return;
        }
        
        // Show loading state
        loginBtn.innerHTML = '<span class="spinner"></span><span class="btn-text">Logging in...</span>';
        loginBtn.disabled = true;
        
        // Simulate API call with timeout
        setTimeout(function() {
            // Check credentials against mock database
            const user = USERS.find(user => user.username === username && user.password === password);
            
            if (user) {
                // Successful login - redirect to index.html
                window.location.href = 'index.html';
            } else {
                // Failed login - check if username exists but password is wrong
                const userExists = USERS.some(user => user.username === username);
                
                if (userExists) {
                    // Username exists but password is wrong
                    errorMessage.textContent = 'Incorrect password. Please enter the right data.';
                } else {
                    // Username doesn't exist - suggest sign up
                    errorMessage.innerHTML = 'Account not found. Please enter the right data or <a href="signup.html" class="signup-link">sign up</a> if you don\'t have an account.';
                }
                
                errorMessage.style.display = 'block';
                
                // Reset button
                loginBtn.innerHTML = originalBtnText;
                loginBtn.disabled = false;
            }
        }, 1000);
    });
});
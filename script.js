//login java
function navigateToLogin(page) {
    if (page === 'Admin') {
        window.location.href = 'SignAdmin.html'; // توجيه إلى صفحة الإدارة
    } else if (page === 'Member') {
        window.location.href = 'SignMember.html'; // توجيه إلى صفحة الأعضاء
    } else if (page === 'Student') {
        window.location.href = 'SignStudent.html'; // توجيه إلى صفحة الطلاب
    }
}

//index java

function navigateToLogin(userType) {
    window.location.href = "login.html?type=" + userType;
}

//SignUp Member

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get all the input elements and the terms checkbox
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="password"]');
    const termsCheckbox = document.querySelector('#terms');
    const photoInput = document.querySelector('#personalImage'); // Get the file input
    let isFormValid = true;
    
    // Check if any input is empty
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isFormValid = false;
            input.classList.add('is-invalid'); // Optional: Add 'is-invalid' class for invalid inputs
        } else {
            input.classList.remove('is-invalid'); // Optional: Remove 'is-invalid' class if input is valid
        }
    });

    // Check if the terms checkbox is checked
    if (!termsCheckbox.checked) {
        isFormValid = false;
        alert('You must agree to the terms and conditions.');
    }

    // Check if a valid image file is selected
    if (photoInput.files.length === 0) {
        isFormValid = false;
        alert('Please upload a photo.');
    } else {
        const file = photoInput.files[0];
        const allowedTypes = ['image/jpeg', 'image/png'];
        
        if (!allowedTypes.includes(file.type)) {
            isFormValid = false;
            alert('Please upload a valid image file (JPEG, PNG).');
        }
    }

    // If the form is valid, redirect to my_account.html
    if (isFormValid) {
        window.location.href = 'my_account.html'; // Redirect to the my_account.html page
    } else {
        alert('Please fill out all the fields and agree to the terms.');
    }
});

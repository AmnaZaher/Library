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


//SignUp Member,student,admin

document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page file name

    let redirectPage = '';

    if (currentPage === 'SignMember.html') {
        redirectPage = 'my_account.html';
    } else if (currentPage === 'SignAdmin.html') {
        redirectPage = 'index.html';
    } else if (currentPage === 'SignStudent.html') {
        redirectPage = 'my_account1.html';
    }

    if (redirectPage) {
        handleFormSubmission(redirectPage);
    }
});

function handleFormSubmission(redirectPage) {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        
        const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="password"]');
        const termsCheckbox = document.querySelector('#terms');
        const photoInput = document.querySelector('#personalImage');
        let isFormValid = true;

        // Validate inputs
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isFormValid = false;
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });

        // Validate terms agreement
        if (!termsCheckbox.checked) {
            isFormValid = false;
            alert('You must agree to the terms and conditions.');
        }

        // Validate image upload
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

        // Redirect if form is valid
        if (isFormValid) {
            window.location.href = redirectPage;
        } else {
            alert('Please fill out all the fields and agree to the terms.');
        }
    });
}

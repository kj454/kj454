document.addEventListener('DOMContentLoaded', function() {
    // Get form and fields
    const form = document.getElementById('registrationForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Event listeners
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        clearErrors();

        let isValid = true;

        // Validate Full Name
        if (fullName.value.length < 5) {
            nameError.textContent = 'Name must be at least 5 characters.';
            isValid = false;
        }

        // Validate Email
        if (!email.value.includes('@')) {
            emailError.textContent = 'Enter a valid email address.';
            isValid = false;
        }

        // Validate Phone Number
        const phoneNumber = phone.value;
        if (phoneNumber.length !== 10 || phoneNumber === '1234567890') {
            phoneError.textContent = 'Enter a valid 10-digit phone number.';
            isValid = false;
        }

        // Validate Password
        const passwordValue = password.value;
        if (passwordValue.length < 8 || passwordValue.toLowerCase() === 'password' || passwordValue.toLowerCase() === fullName.value.toLowerCase()) {
            passwordError.textContent = 'Password must be at least 8 characters and not include "password" or your name.';
            isValid = false;
        }

        // Validate Confirm Password
        if (passwordValue !== confirmPassword.value) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            isValid = false;
        }

        // Submit form if valid
        if (isValid) {
            form.submit();
        }
    });

    // Clear error messages
    function clearErrors() {
        nameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';
    }
});

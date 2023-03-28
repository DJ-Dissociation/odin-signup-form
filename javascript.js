// Script to ensure password validation on submission
const submit_button = document.querySelector(".submit-button");
const user_password_input = document.getElementById("user_password");
const confirm_password_input = document.getElementById("confirm_password");
const form = document.querySelector('form');
const pw_error_msg = document.createElement('div');
pw_error_msg.textContent="Passwords must match.";
pw_error_msg.classList.add('error-message');

// When user tries to leave the confirm_password input, check if it matches the original password
confirm_password_input.addEventListener('blur', () => {
    let user_password = user_password_input.value;          // Collect current values
    let confirm_password = confirm_password_input.value;

    if (user_password != confirm_password) {                // If they don't match, disable button and display error msg/style
        user_password_input.classList.add("pw_error");
        confirm_password_input.classList.add("pw_error");
        form.appendChild(pw_error_msg);
        submit_button.disabled = true;
        console.log('disabled')
    } else {                                                // If they do match, enable button and remove error msg/style
        user_password_input.classList.remove("pw_error");
        confirm_password_input.classList.remove("pw_error");
        if (form.contains(pw_error_msg)) {
            form.removeChild(pw_error_msg);
        }
        submit_button.disabled = false;
        console.log('enabled')
    }
})

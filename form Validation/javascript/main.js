const username = document.querySelector("#username");
const email = document.querySelector("#email"); 
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirm");
const form = document.querySelector(".form");

const showError = (input, message) => {
    let parentElement = input.parentElement; 
    parentElement.classList.remove('success'); // Remove success if present
    parentElement.classList.add('error'); 

    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];

    errorIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden';

    if (small) {
        small.innerText = message;
        small.style.visibility = 'visible';
    }
}

const showSuccess = (input) => {
    let parentElement = input.parentElement;
    parentElement.classList.remove('error'); // Remove error if present
    parentElement.classList.add('success'); 

    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];

    errorIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible';

    const small = parentElement.querySelector("small");
    if (small) {
        small.style.visibility = 'hidden'; // Hide error message if present
    }
}

const handleCheckEmpty = (elements) => {
    elements.forEach((element) => {
        if (element.value.trim() === '') { // Trim whitespace to prevent empty spaces
            showError(element, 'Input required');
        } else {
            showSuccess(element);
        }
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleCheckEmpty([username, email, password, confirmpassword]);
});

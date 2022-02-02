const form = document.getElementById("form")
const email = document.getElementById("email")
const errorContainer = document.getElementById("error-container")
const error = document.getElementById("error")

const emailValid = validEmail => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(validEmail).toLowerCase());
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (email.value === '' || !emailValid(email.value)) {
        error.innerText = "Please provide a valid email."
        email.classList.toggle('input-error')
        error.classList.toggle('message-error')
        errorContainer.classList.toggle('show')
    } 
    else {
        error.innerText = "Email sent!"
        email.classList.toggle('input-success')
        error.classList.toggle('message-success')
        errorContainer.classList.toggle('show')
        
        email.value = ""
    }
})
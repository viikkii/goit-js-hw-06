const inputEl = document.querySelector('#validation-input');
console.log(inputEl)


function validInvalid(valid, invalid) {
    if (inputEl.value.length >= inputEl.getAttribute('data-length')) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    }
    else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')              
    }
}
inputEl.addEventListener("blur", validInvalid)


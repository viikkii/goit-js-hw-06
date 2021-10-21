const form = document.querySelector('form.login-form')
console.log(form);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
    const {
    elements: { email, password } } = event.currentTarget;


if (email.value === "" || password.value === "") {
  alert `все поля должны быть заполнены!`;
  form.reset();
}

console.log(`email: ${email.value}, password: ${password.value}`);
event.currentTarget.reset();
}
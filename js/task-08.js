const form = document.querySelector('form.login-form')
console.log(form);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password } } = event.currentTarget;


  if (email.value === "" || password.value === "") {
    alert(`все поля должны быть заполнены!`);
    form.reset();
    return
  }

  console.log(`getAttribute('email'): ${ email.value }, getAttribute('password'): ${ password.value }`);
form.reset();
}
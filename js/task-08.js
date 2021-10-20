const form = document.querySelector('form.login-form')
console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password }} = event.currentTarget;
  console.log(email.value, password.value);
});

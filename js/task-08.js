const form = document.querySelector('form.login-form')
console.log(form);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  
  if (email.value === "" || password.value === "") {
    return alert(`все поля должны быть заполнены!`)
  }

  const userFormResult = {};
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    userFormResult[name] = value;
  })

  console.log(userFormResult);
form.reset();
}
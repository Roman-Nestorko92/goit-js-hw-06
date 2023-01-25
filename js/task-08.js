const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", functionLoginForm);

function functionLoginForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill all elements");
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

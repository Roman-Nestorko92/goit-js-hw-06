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
  const obj = {
    email: email.value,
    password: password.value,
  };
  console.log(obj);
  event.currentTarget.reset();
}

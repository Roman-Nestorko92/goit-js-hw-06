const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", inputHandler);
//el.currentTarget.value

function inputHandler(str) {
  if (str.currentTarget.value === "") {
    return (output.textContent = "Anonymous");
  }
  output.textContent = str.currentTarget.value;
}

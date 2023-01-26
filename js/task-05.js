const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", functionName);
//el.currentTarget.value

function functionName(str) {
  if (str.currentTarget.value === "") {
    return (output.textContent = "Anonymous");
  }
  output.textContent = str.currentTarget.value;
}

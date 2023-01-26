const input = document.querySelector("#validation-input");
const dataLength = input.getAttribute("data-length");

input.addEventListener("blur", functionValid);

function functionValid() {
  if (Number(dataLength) === this.value.length) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
}

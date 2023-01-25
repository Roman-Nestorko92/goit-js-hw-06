const valiIput = document.querySelector("#validation-input");
valiIput.addEventListener("blur", functionValid);

function functionValid() {
  const currentLength = this.dataset.length;
  const inputDataLength = this.value.length;
  if (currentLength == inputDataLength) {
    this.style.borderColor = "#4caf50";
  } else {
    this.style.borderColor = "#f44336";
  }
}

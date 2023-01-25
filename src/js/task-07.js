let size = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

size.addEventListener("input", functionSize);

function functionSize(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const color = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  let changeColor = (bodyColor.style.background = getRandomHexColor());
  color.textContent = changeColor;
}

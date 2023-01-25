function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const div = document.querySelector("#boxes");
const input = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");

buttonCreate.addEventListener("click", buttonCreateHandler);
buttonDestroy.addEventListener("click", destroyFunction);

function buttonCreateHandler() {
  createBoxes(Number(input.value));
}

function createBoxes(amount) {
  // console.log(typeof input.min);
  if (amount >= Number(input.min) && amount <= Number(input.max)) {
    const arr = [];
    for (let index = 0; index < amount; index++) {
      // const divElem = document.createElement("div");
      // const colorDiv = getRandomHexColor();
      // divElem.style.background = colorDiv;
      // divElem.style.width = 30 + 10 * index + "px";
      // divElem.style.height = 30 + 10 * index + "px";
      // div.append(divElem);
      const math = 30 + 10 * index;
      const divDiv = `<div style = "width: ${math}px; height: ${math}px; background: ${getRandomHexColor()}"></div>`;
      arr.push(divDiv);
    }
    div.insertAdjacentHTML("afterbegin", arr.join(""));
  } else {
    return alert("Введіть коректне значення");
  }
}

function destroyFunction() {
  div.innerHTML = "";
  input.value = "";
}

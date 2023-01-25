let counterValue = 0;
const countValue = document.querySelector("#value");
const buttonIncre = document.querySelector("[data-action = 'increment']");
const buttonDecre = document.querySelector("[data-action = 'decrement']");
buttonIncre.addEventListener("click", functionIncrement);
buttonDecre.addEventListener("click", functionDecrement);

function functionIncrement() {
  //   buttonIncre.addEventListener('click')
  counterValue++;
  countValue.textContent = counterValue.toString();
  //console.log(counterValue)
}

function functionDecrement() {
  counterValue--;
  countValue.textContent = counterValue.toString();
}



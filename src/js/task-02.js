const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItem = ingredients.map((el) => `<li>${el}</li>`).join("");
//console.log(listItem);

const ulList = document.querySelector("#ingredients");

ulList.insertAdjacentHTML("afterbegin", listItem);

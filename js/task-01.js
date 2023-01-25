// const qwe = document.querySelector('#categories')
// console.log(qwe)

const liItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItems.length}`);

for (const item of liItems) {
  // console.log(item)
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelector("ul").children.length}`);
}

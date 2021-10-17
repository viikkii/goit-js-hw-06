const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.log(ingredients);
const ingredient = document.querySelector(`ul#ingredients`);
const items = ingredients.map(elem => {
  const item = document.createElement("li");
  item.textContent = elem;
   item.classList.add("item");
  return item
})
console.log(items);
ingredient.append(...items)


// const ingredient = document.querySelector(`ul#ingredients`);
// console.log(ingredient);
// const item = document.createElement("li");
// item.append(ingredients);
// console.log(item);

// const ingredient = document.querySelector(`ul#ingredients`);
// const categories = [...ingredients];
// const elem = "";
// for (const elem of categories) {
//   const item = document.createElement("li");
//   item.append(elem);
//   item.classList.add("item");
//   console.log(item);
  // console.log(categories.insertAdjacentHTML("afterbegin", `ul#ingredients`));
// }



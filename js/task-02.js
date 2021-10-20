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

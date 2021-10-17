const item = document.querySelectorAll(`ul#categories>li.item`);
console.log(`Number of categories: ${ item.length }`);

const categories = [...item];
for (let elem of categories) {
    let category = elem.firstElementChild.textContent;   
    let value = elem.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${value}`);
};

const inputEl = document.querySelector('input#font-size-control');
console.log(inputEl)

const span = document.getElementById('text');
console.log(span)

const range = () => {
 span.style.fontSize = `${inputEl.value}px`;
};

inputEl.addEventListener('input', range);

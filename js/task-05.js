const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');
console.log(inputEl);
console.log(spanEl);

inputEl.addEventListener("click", () => {
    if (spanEl.textContent = inputEl.value) {
        return spanEl.textContent
    };
    return spanEl.textContent = `Anonymous`;
}
)

let button = document.querySelector(".cta__button");
let ctaInput  = document.querySelector(".cta__input");
let label  = document.querySelector(".label");

button.addEventListener("click", () => {
    if(ctaInput.validity.valid == false) {
        label.classList.add("js-label")
    }else {
        label.classList.remove("js-label")
    }
})
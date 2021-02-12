let button = document.querySelector(".footer__button");
let footerInput  = document.querySelector(".footer__input");
let label  = document.querySelector(".footer__label");

button.addEventListener("click", () => {
    if(footerInput.validity.valid == false) {
        label.classList.add("js-label")
    }else {
        label.classList.remove("js-label")
    }
})
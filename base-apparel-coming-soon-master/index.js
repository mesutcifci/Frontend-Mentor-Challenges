"use strict"

let button = document.querySelector(".email-form-button");
let error  = document.querySelector(".email-form-error");
let input  = document.querySelector(".email-form-input");
let label  = document.querySelector(".email-form-label");

button.addEventListener('click', () => {
    if( !input.validity.valid ) {

        console.log("Invalid");
        error.classList.add("js-show");
        label.classList.add("js-show");
        input.classList.add("js-input");

    }else if ( input.validity.valid ){
        
        console.log("Valid");
        error.classList.remove("js-show");
        label.classList.remove("js-show");
        input.classList.remove("js-input");

    }
})

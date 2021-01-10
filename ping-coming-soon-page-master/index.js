"use strict"

let parrentClassName = ".notify-form";

let button = document.querySelector(`${parrentClassName}--button`);
let input  = document.querySelector(`${parrentClassName}--input`);
let label  = document.querySelector(`${parrentClassName}--label`);


button.addEventListener('click', () => {
    if( input.validity.valid === false ) {

        console.log("Invalid");
        label.classList.add("js-label");
        input.classList.add("js-input");

    }else if ( input.validity.valid === true ){
        
        console.log("Valid");
        label.classList.remove("js-label");
        input.classList.remove("js-input");

    }
});

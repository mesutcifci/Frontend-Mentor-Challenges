"use strict"

let button = document.querySelector(".card-wrapper--button");
let errorElements = document.getElementsByClassName("error");

let inputElements = document.getElementsByClassName("card-wrapper--input");

button.classList.c

function addClass(element, sibling1, sibling2) {

    if( !(sibling1.classList.contains("js-error")) )  {
        sibling1.classList.add("js-error");
        sibling2.classList.add("js-error");
        element.classList.add("js-border");
    }

}


function removeClass(element, sibling1, sibling2) {

    if( sibling1.classList.contains("js-error"))   {
        sibling1.classList.remove("js-error");
        sibling2.classList.remove("js-error");
        element.classList.remove("js-border");
    }

}

function checkValue(elements) {
    for(let element of elements ) {

        let nextSibling1  = element.nextElementSibling;
        let nextSibling2  = nextSibling1.nextElementSibling;

        if(element.validity.valueMissing === true || element.validity.valid === false) {
            
            addClass(element, nextSibling1, nextSibling2);

        }else if( element.validity.valueMissing === false ) {

            removeClass(element, nextSibling1, nextSibling2);

        }

    }
}



button.addEventListener("click", () => {
    checkValue(inputElements);
});

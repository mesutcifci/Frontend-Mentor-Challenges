"use strict"

let buttons = Array.from(document.getElementsByClassName("button"));
let tanya = document.getElementById("page-tanya");
let john = document.getElementById("page-john");

for (let i = 0; i <= 3; i++) {
    buttons[i].addEventListener("click", () => {
        tanya.classList.toggle("hide");
        john.classList.toggle("hide");
        console.log("clicked");
    });
}

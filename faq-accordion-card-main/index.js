"use strict"

let answers = document.getElementsByClassName("answer");
let arrows = document.getElementsByClassName("arrow-icon");

function showAnswer() {
    let classList = this.classList;
    let answer = this.parentElement.nextElementSibling;
    let question = this.parentElement.children[0];

    if (classList.contains("arrow-icon-up")) {
        classList.remove("arrow-icon-up");
        answer.classList.remove("open-answer");
        question.classList.remove("bold");
    } else {
        classList.add("arrow-icon-up");
        answer.classList.add("open-answer");
        question.classList.add("bold");
    }
}

for (let arrow of arrows) {
    arrow.addEventListener("click", showAnswer);
}



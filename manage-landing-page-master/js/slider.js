let cards = document.getElementsByClassName("card");
let dots  = document.getElementsByClassName("dot");

cards = Array.from(cards);
dots  = Array.from(dots);


function translateCard(elementIndex) {
  cards[elementIndex].classList.toggle("js-translate");
}

dots.forEach((element, elementIndex, array) => {
   element.addEventListener("click", () => {
     translateCard(elementIndex);
   }) 
});
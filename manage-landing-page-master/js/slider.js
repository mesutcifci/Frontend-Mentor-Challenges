let cards = document.getElementsByClassName("card");
let dots = document.getElementsByClassName("dot");

cards = Array.from(cards);
dots = Array.from(dots);


function removeClass(array, className, elementIndex) {

  array.forEach((element, currentIndex, array) => {
    if (elementIndex != currentIndex) {
      element.classList.remove(className);
    }
  });

}

function slideCard(elementIndex) {

  removeClass(cards, "card--default", elementIndex);

  for (let i = 0; i < elementIndex; i++) {

    if (cards[i].classList.contains("card--next")) {
      cards[i].classList.remove("card--next");
      cards[i].classList.add("card--prev");
    }

  }

  for (let i = elementIndex; i < cards.length; i++) {
    if (cards[i].classList.contains("card--prev")) {
      cards[i].classList.remove("card--prev");
      cards[i].classList.add("card--next");
    }
  }

  cards[elementIndex].classList.add("card--default");
}

function markDot(elementIndex) {
  if (dots[elementIndex].classList.contains("dot--selected") == false) {
    dots[elementIndex].classList.add("dot--selected");
    removeClass(dots,"dot--selected", elementIndex);
  }
}

dots.forEach((element, elementIndex, array) => {
  element.addEventListener("click", () => {
    slideCard(elementIndex);
    markDot(elementIndex);
  })
});

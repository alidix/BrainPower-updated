const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add("flip");
  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    hasFlippedCard;
  }
}

cards.forEach((cards) => cards.addEventListener("click", flipCard));

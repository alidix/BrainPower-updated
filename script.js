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
    //  second click
    hasFlippedCard = false;
    secondCard = this;

    // console.log({ firstCard, secondCard });
    //  Do cards match?
    // console.log(firstCard.dataset.framework);
    // console.log(secondCard.dataset.framework);
  }
}

cards.forEach((cards) => cards.addEventListener("click", flipCard));

const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add("flip");
  //   this.classList.toggle("flip");
  //     console.log("I was clicked");
  //     console.log(this);
  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    // console.log({ hasFlippedCard, firstCard });
  } else {
    hasFlippedCard;
  }
}

cards.forEach((cards) => cards.addEventListener("click", flipCard));

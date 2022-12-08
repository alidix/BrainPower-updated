const cards = document.querySelectorAll(".memory-card");
const resetButton = document.querySelector(".reset-button");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let counter = 0;

function flipCard() {
  if (lockBoard) return;
  // if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  //  second click
  hasFlippedCard = false;
  secondCard = this;

  checkForMatch();
  checkForWin();
}
// console.log({ firstCard, secondCard });
//  Do cards match?
// console.log(firstCard.dataset.framework);
// console.log(secondCard.dataset.framework);
function checkForWin() {
  if (counter === 6) {
    document.getElementById("title").textContent = "you win";
  }
}
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  if (isMatch) {
    counter++;
  }
  isMatch ? disableCards() : unflipCards();
  // console.log(counter);
}
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    continueBoard();
  }, 1500);
}

function continueBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard.classList.remove("flip");
  secondCard.classList.remove("flip");
}
function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  document.getElementById("title").textContent = "Brain Power";
  cards.forEach((card) => {
    card.classList.remove("flip");
  });
  cards.forEach((card) => card.addEventListener("click", flipCard));
  resetButton.addEventListener("click", resetButton);
  shuffle();
}

function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}

resetButton.addEventListener("click", resetBoard);

resetBoard();

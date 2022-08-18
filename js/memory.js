const cards = document.querySelectorAll(".memory-card");
const countdownEl = document.getElementById("countdown");
//when player click card(if first card or second)

///COUNTDOWN FUNCTION
const startingMinutes = 0.3;
let time = startingMinutes * 60;

setInterval(updateCountdown, 300);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownEl.innerHTML = `${minutes} : ${seconds}`;
  time--;

  if (time === 0) {
    alert("time expected");
    time++;
  }
}
///COUNTDOWN FUNCTION END

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  //if clasesse here remowe it, if classes is not here added
  this.classList.add("flip");

  //if player clicked first time card->
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  //second click
  hasFlippedCard = false;
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unfliCards();
}

function disableCards() {
  //it's a match!!
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unfliCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard.secondCard] = [null, null];
}

//immediatly inwoke function expresion executed right after definition
(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

//LOPP THROW THE CARDS
cards.forEach((card) => card.addEventListener("click", flipCard));

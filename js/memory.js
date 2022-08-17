const cards = document.querySelectorAll(".memory-card");

function flipCard() {
  //if clasesse here remowe it, if classes is not here added
  this.classList.toggle("flip");
}

//lopp throw cards
cards.forEach((card) => card.addEventListener("click", flipCard));

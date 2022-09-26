const cards = document.querySelectorAll('.memory-card')

let cardIsFlipped = false
let firstCard, secondCard

function flipCard() {
  this.classList.toggle('flip')

  if (!cardIsFlipped) {
    cardIsFlipped = true
    firstCard = this
  } else {
    cardIsFlipped = false
    secondCard = this
  }
}

cards.forEach(function (card) {
  card.addEventListener('click', flipCard)
})

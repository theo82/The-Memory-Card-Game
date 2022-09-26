const cards = document.querySelectorAll('.memory-card')

let cardIsFlipped = false
let firstCard, secondCard

function flipCard() {
  this.classList.toggle('flip')
  console.log(this)
  if (!cardIsFlipped) {
    // first click => first card
    cardIsFlipped = true
    firstCard = this
    // console.log(cardIsFlipped, firstCard)
  } else {
    // second click => second card
    cardIsFlipped = false
    secondCard = this

    // console.log(cardIsFlipped, firstCard)

    // checking wether the cards match
    // console.log(firstCard.dataset.name)
    // console.log(secondCard.dataset.name)
  }
}

cards.forEach(function (card) {
  card.addEventListener('click', flipCard)
})

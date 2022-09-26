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
    if (firstCard.dataset.name === secondCard.dataset.name) {
      // it is a match => disable the cards
      firstCard.removeEventListener('click', flipCard)
      secondCard.removeEventListener('click', flipCard)
    } else {
      // not a match => unflip cards
      setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
      }, 1500)
    }
  }
}

cards.forEach(function (card) {
  card.addEventListener('click', flipCard)
})

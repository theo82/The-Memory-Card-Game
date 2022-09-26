const cards = document.querySelectorAll('.memory-card')

let cardIsFlipped = false
let firstCard, secondCard

function flipCard() {
  // this.classList.toggle('flip')
  this.classList.add('flip')

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

    // console.log(cardIsFlipped, secondCard)

    // checking wether the cards match
    // console.log(firstCard.dataset.name)
    // console.log(secondCard.dataset.name)
    checkForMatch()
  }
}

function checkForMatch() {
  let isMatched = firstCard.dataset.name === secondCard.dataset.name
  isMatched ? disableCards() : unflipCards()
  // if (firstCard.dataset.name === secondCard.dataset.name) {
  //   // it is a match => disable the cards/stay flipped
  //   disableCards()
  // } else {
  //   // not a match => unflip cards
  //   unflipCards()
  // }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
  }, 1500)
}

cards.forEach(function (card) {
  card.addEventListener('click', flipCard)
})

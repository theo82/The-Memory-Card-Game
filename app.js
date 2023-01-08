const cards = document.querySelectorAll('.memory-card')

let cardIsFlipped = false
let lockBoard = false
let firstCard, secondCard

function flipCard() {
  if (lockBoard) return
  // if (this === firstCard) return
  if (this === firstCard) return
  // this.classList.toggle('flip')
  this.classList.add('flip')
  console.log(lockBoard)
  console.log(this)
  if (!cardIsFlipped) {
    // first click => first card
    cardIsFlipped = true
    firstCard = this
    // console.log(cardIsFlipped, firstCard)

    return
  } else {
    // second click => second card
    // cardIsFlipped = false

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
  // console.log(lockBoard)
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
  resetBoard()
}

function unflipCards() {
  lockBoard = true
  setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    resetBoard()
  }, 1500)
}

const resetBoard = () => {
  ;[cardIsFlipped, lockBoard] = [false, false]
  ;[firstCard, secondCard] = [null, null]
}

// IIFE -> Immediately Invoked Function Expression -> function is called immediately after its definition
;(function shuffle() {
  cards.forEach(function (card) {
    let randomPosition = Math.floor(Math.random() * 12)
    card.style.order = randomPosition
  })
})()

cards.forEach(function (card) {
  card.addEventListener('click', flipCard)
})

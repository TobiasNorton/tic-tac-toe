let boxLetter = true

let numberOfTurns = 0

let playerOneBoxes = []

let playerTwoBoxes = []

let playerOneTurn = true

const togglePlayerTurns = () => {
  if (playerOneTurn === true) {
    let turnHeader = document.querySelector('h3')
    turnHeader.textContent = 'Player One Go!'
  } else {
    let turnHeader = document.querySelector('h3')
    turnHeader.textContent = 'Player Two Go!'
  }
}

const fillBoxOneWithLetter = () => {
  document.querySelector('.one').disabled = true
  document.querySelector('.one').style.color = 'black'
  numberOfTurns++
  playerOneTurn = !playerOneTurn
  togglePlayerTurns()
  console.log(boxLetter)
  if (boxLetter === true) {
    boxOne.textContent = 'x'
    playerOneBoxes.push(1)
    console.log(playerOneBoxes)
    winLogic()
  } else {
    boxOne.textContent = 'o'
    playerTwoBoxes.push(1)
    console.log(playerTwoBoxes)
    winLogic()
  }
  boxLetter = !boxLetter
}

const fillBoxTwoWithLetter = () => {
  document.querySelector('.two').disabled = true
  document.querySelector('.two').style.color = 'black'
  numberOfTurns++
  playerOneTurn = !playerOneTurn
  togglePlayerTurns()
  togglePlayerTurns()
  if (boxLetter === true) {
    boxTwo.textContent = 'x'
    playerOneBoxes.push(2)
    console.log(playerOneBoxes)
    winLogic()
  } else {
    boxTwo.textContent = 'o'
    playerTwoBoxes.push(2)
    console.log(playerTwoBoxes)
    winLogic()
  }
  boxLetter = !boxLetter
}

const fillBoxThreeWithLetter = () => {
  document.querySelector('.three').disabled = true
  document.querySelector('.three').style.color = 'black'
  numberOfTurns++
  playerOneTurn = !playerOneTurn
  togglePlayerTurns()
  if (boxLetter === true) {
    boxThree.textContent = 'x'
    playerOneBoxes.push(3)
    console.log(playerOneBoxes)
    winLogic()
  } else {
    boxThree.textContent = 'o'
    playerTwoBoxes.push(3)
    console.log(playerTwoBoxes)
    winLogic()
  }
  boxLetter = !boxLetter
}

const fillBoxFourWithLetter = () => {
  document.querySelector('.four').disabled = true
  document.querySelector('.four').style.color = 'black'
  numberOfTurns++
  playerOneTurn = !playerOneTurn
  togglePlayerTurns()
  if (boxLetter === true) {
    boxFour.textContent = 'x'
    playerOneBoxes.push(4)
    console.log(playerOneBoxes)
    winLogic()
  } else {
    boxFour.textContent = 'o'
    playerTwoBoxes.push(4)
    console.log(playerTwoBoxes)
    winLogic()
  }
  boxLetter = !boxLetter
}

const fillBoxFiveWithLetter = () => {
  document.querySelector('.five').disabled = true
  document.querySelector('.five').style.color = 'black'
  numberOfTurns++
  playerOneTurn = !playerOneTurn
  togglePlayerTurns()
  if (boxLetter === true) {
    boxFive.textContent = 'x'
    playerOneBoxes.push(5)
    console.log(playerOneBoxes)
    winLogic()
  } else {
    boxFive.textContent = 'o'
    playerTwoBoxes.push(5)
    console.log(playerTwoBoxes)
    winLogic()
  }
  boxLetter = !boxLetter
}

const fillBoxSixWithLetter = () => {
  document.querySelector('.six').disabled = true
  document.querySelector('.six').style.color = 'black'
  numberOfTurns++
  playerOneTurn = !playerOneTurn
  togglePlayerTurns()
  if (boxLetter === true) {
    boxSix.textContent = 'x'
    playerOneBoxes.push(6)
    console.log(playerOneBoxes)
    winLogic()
  } else {
    boxSix.textContent = 'o'
    playerTwoBoxes.push(6)
    console.log(playerTwoBoxes)
    winLogic()
  }
  boxLetter = !boxLetter
}

const fillBoxSevenWithLetter = () => {
  document.querySelector('.seven').disabled = true
  document.querySelector('.seven').style.color = 'black'
  numberOfTurns++
  playerOneTurn = !playerOneTurn
  togglePlayerTurns()
  if (boxLetter === true) {
    boxSeven.textContent = 'x'
    playerOneBoxes.push(7)
    console.log(playerOneBoxes)
    winLogic()
  } else {
    boxSeven.textContent = 'o'
    playerTwoBoxes.push(7)
    console.log(playerTwoBoxes)
    winLogic()
  }
  boxLetter = !boxLetter
}

const fillBoxEightWithLetter = () => {
  document.querySelector('.eight').disabled = true
  document.querySelector('.eight').style.color = 'black'
  numberOfTurns++
  playerOneTurn = !playerOneTurn
  togglePlayerTurns()
  if (boxLetter === true) {
    boxEight.textContent = 'x'
    playerOneBoxes.push(8)
    console.log(playerOneBoxes)
    winLogic()
  } else {
    boxEight.textContent = 'o'
    playerTwoBoxes.push(8)
    console.log(playerTwoBoxes)
    winLogic()
  }
  boxLetter = !boxLetter
}

const fillBoxNineWithLetter = () => {
  document.querySelector('.nine').disabled = true
  document.querySelector('.nine').style.color = 'black'
  numberOfTurns++
  playerOneTurn = !playerOneTurn
  togglePlayerTurns()
  if (boxLetter === true) {
    boxNine.textContent = 'x'
    playerOneBoxes.push(9)
    console.log(playerOneBoxes)
    winLogic()
  } else {
    boxNine.textContent = 'o'
    playerTwoBoxes.push(9)
    console.log(playerTwoBoxes)
    winLogic()
  }
  boxLetter = !boxLetter
}

const winLogic = () => {
  if (
    (playerOneBoxes.includes(1) && playerOneBoxes.includes(2) && playerOneBoxes.includes(3)) ||
    (playerOneBoxes.includes(4) && playerOneBoxes.includes(5) && playerOneBoxes.includes(6)) ||
    (playerOneBoxes.includes(7) && playerOneBoxes.includes(8) && playerOneBoxes.includes(9)) ||
    (playerOneBoxes.includes(1) && playerOneBoxes.includes(4) && playerOneBoxes.includes(7)) ||
    (playerOneBoxes.includes(2) && playerOneBoxes.includes(5) && playerOneBoxes.includes(8)) ||
    (playerOneBoxes.includes(3) && playerOneBoxes.includes(6) && playerOneBoxes.includes(9)) ||
    (playerOneBoxes.includes(1) && playerOneBoxes.includes(5) && playerOneBoxes.includes(9)) ||
    (playerOneBoxes.includes(3) && playerOneBoxes.includes(5) && playerOneBoxes.includes(7))
  ) {
    let playerOneWins = document.querySelector('h3')
    playerOneWins.textContent = 'Player One Wins!'
    let resetButton = document.querySelector('.reset')
    resetButton.classList.remove('hidden')
  }

  if (
    (playerTwoBoxes.includes(1) && playerTwoBoxes.includes(2) && playerTwoBoxes.includes(3)) ||
    (playerTwoBoxes.includes(4) && playerTwoBoxes.includes(5) && playerTwoBoxes.includes(6)) ||
    (playerTwoBoxes.includes(7) && playerTwoBoxes.includes(8) && playerTwoBoxes.includes(9)) ||
    (playerTwoBoxes.includes(1) && playerTwoBoxes.includes(4) && playerTwoBoxes.includes(7)) ||
    (playerTwoBoxes.includes(2) && playerTwoBoxes.includes(5) && playerTwoBoxes.includes(8)) ||
    (playerTwoBoxes.includes(3) && playerTwoBoxes.includes(6) && playerTwoBoxes.includes(9)) ||
    (playerTwoBoxes.includes(1) && playerTwoBoxes.includes(5) && playerTwoBoxes.includes(9)) ||
    (playerTwoBoxes.includes(3) && playerTwoBoxes.includes(5) && playerTwoBoxes.includes(7))
  ) {
    let playerTwoWins = document.querySelector('h3')
    playerTwoWins.textContent = 'Player Two Wins!'
    let resetButton = document.querySelector('.reset')
    resetButton.classList.remove('hidden')
  }

  if (
    (numberOfTurns === 9 && document.querySelector('h3').textContent === 'Player One Go!') ||
    (numberOfTurns === 9 && document.querySelector('h3').textContent === 'Player Two Go!')
  ) {
    let tieGame = document.querySelector('h3')
    tieGame.textContent = 'Tie Game!'
    let resetButton = document.querySelector('.reset')
    resetButton.classList.remove('hidden')
  }
}

const resetGame = () => {
  location.reload()
}

let boxOne = document.querySelector('.one')
boxOne.addEventListener('click', fillBoxOneWithLetter)

let boxTwo = document.querySelector('.two')
boxTwo.addEventListener('click', fillBoxTwoWithLetter)

let boxThree = document.querySelector('.three')
boxThree.addEventListener('click', fillBoxThreeWithLetter)

let boxFour = document.querySelector('.four')
boxFour.addEventListener('click', fillBoxFourWithLetter)

let boxFive = document.querySelector('.five')
boxFive.addEventListener('click', fillBoxFiveWithLetter)

let boxSix = document.querySelector('.six')
boxSix.addEventListener('click', fillBoxSixWithLetter)

let boxSeven = document.querySelector('.seven')
boxSeven.addEventListener('click', fillBoxSevenWithLetter)

let boxEight = document.querySelector('.eight')
boxEight.addEventListener('click', fillBoxEightWithLetter)

let boxNine = document.querySelector('.nine')
boxNine.addEventListener('click', fillBoxNineWithLetter)

let resetButton = document.querySelector('.reset')
resetButton.addEventListener('click', resetGame)

const main = () => {}

document.addEventListener('DOMContentLoaded', main)

let boxLetter = true

let numberOfTurns = 0

let playerOneArray = []

let playerTwoArray = []

const fillBoxOneWithLetter = () => {
  document.querySelector('.one').disabled = true
  document.querySelector('.one').style.color = 'black'
  numberOfTurns++
  console.log(boxLetter)
  if (boxLetter === true) {
    boxOne.textContent = 'x'
    playerOneArray.push(1)
    console.log(playerOneArray)
    winLogic()
  } else {
    boxOne.textContent = 'o'
    playerTwoArray.push(1)
    console.log(playerTwoArray)
    winLogic()
  }
  boxLetter = !boxLetter
}

const fillBoxTwoWithLetter = () => {
  document.querySelector('.two').disabled = true
  document.querySelector('.two').style.color = 'black'
  numberOfTurns++
  if (boxLetter === true) {
    boxTwo.textContent = 'x'
    playerOneArray.push(2)
    console.log(playerOneArray)
    winLogic()
  } else {
    boxTwo.textContent = 'o'
    playerTwoArray.push(2)
    console.log(playerTwoArray)
    winLogic()
  }
  boxLetter = !boxLetter
}

const fillBoxThreeWithLetter = () => {
  document.querySelector('.three').disabled = true
  document.querySelector('.three').style.color = 'black'
  numberOfTurns++
  if (boxLetter === true) {
    boxThree.textContent = 'x'
    playerOneArray.push(3)
    console.log(playerOneArray)
    winLogic()
  } else {
    boxThree.textContent = 'o'
    playerTwoArray.push(3)
    console.log(playerTwoArray)
    winLogic()
  }
  boxLetter = !boxLetter
}

const fillBoxFourWithLetter = () => {
  document.querySelector('.four').disabled = true
  document.querySelector('.four').style.color = 'black'
  numberOfTurns++
  if (boxLetter === true) {
    boxFour.textContent = 'x'
    playerOneArray.push(4)
    console.log(playerOneArray)
    winLogic()
  } else {
    boxFour.textContent = 'o'
    playerTwoArray.push(4)
    console.log(playerTwoArray)
    winLogic()
  }
  boxLetter = !boxLetter
}

const fillBoxFiveWithLetter = () => {
  document.querySelector('.five').disabled = true
  document.querySelector('.five').style.color = 'black'
  numberOfTurns++
  if (boxLetter === true) {
    boxFive.textContent = 'x'
    playerOneArray.push(5)
    console.log(playerOneArray)
    winLogic()
  } else {
    boxFive.textContent = 'o'
    playerTwoArray.push(5)
    console.log(playerTwoArray)
    winLogic()
  }
  boxLetter = !boxLetter
}

const fillBoxSixWithLetter = () => {
  document.querySelector('.six').disabled = true
  document.querySelector('.six').style.color = 'black'
  numberOfTurns++
  if (boxLetter === true) {
    boxSix.textContent = 'x'
    playerOneArray.push(6)
    console.log(playerOneArray)
    winLogic()
  } else {
    boxSix.textContent = 'o'
    playerTwoArray.push(6)
    console.log(playerTwoArray)
    winLogic()
  }
  boxLetter = !boxLetter
}

const fillBoxSevenWithLetter = () => {
  document.querySelector('.seven').disabled = true
  document.querySelector('.seven').style.color = 'black'
  numberOfTurns++
  if (boxLetter === true) {
    boxSeven.textContent = 'x'
    playerOneArray.push(7)
    console.log(playerOneArray)
    winLogic()
  } else {
    boxSeven.textContent = 'o'
    playerTwoArray.push(7)
    console.log(playerTwoArray)
    winLogic()
  }
  boxLetter = !boxLetter
}

const fillBoxEightWithLetter = () => {
  document.querySelector('.eight').disabled = true
  document.querySelector('.eight').style.color = 'black'
  numberOfTurns++
  if (boxLetter === true) {
    boxEight.textContent = 'x'
    playerOneArray.push(8)
    console.log(playerOneArray)
    winLogic()
  } else {
    boxEight.textContent = 'o'
    playerTwoArray.push(8)
    console.log(playerTwoArray)
    winLogic()
  }
  boxLetter = !boxLetter
  // boxLetter = boxLetter ? false : true
}

const fillBoxNineWithLetter = () => {
  document.querySelector('.nine').disabled = true
  document.querySelector('.nine').style.color = 'black'
  numberOfTurns++
  if (boxLetter === true) {
    boxNine.textContent = 'x'
    playerOneArray.push(9)
    console.log(playerOneArray)
    winLogic()
  } else {
    boxNine.textContent = 'o'
    playerTwoArray.push(9)
    console.log(playerTwoArray)
    winLogic()
  }
  boxLetter = !boxLetter
  // boxLetter ? (boxLetter = false) : (boxLetter = true)
}

const winLogic = () => {
  if (
    (playerOneArray.includes(1) && playerOneArray.includes(2) && playerOneArray.includes(3)) ||
    (playerOneArray.includes(4) && playerOneArray.includes(5) && playerOneArray.includes(6)) ||
    (playerOneArray.includes(7) && playerOneArray.includes(8) && playerOneArray.includes(9)) ||
    (playerOneArray.includes(1) && playerOneArray.includes(4) && playerOneArray.includes(7)) ||
    (playerOneArray.includes(2) && playerOneArray.includes(5) && playerOneArray.includes(8)) ||
    (playerOneArray.includes(3) && playerOneArray.includes(6) && playerOneArray.includes(9)) ||
    (playerOneArray.includes(1) && playerOneArray.includes(5) && playerOneArray.includes(9)) ||
    (playerOneArray.includes(3) && playerOneArray.includes(5) && playerOneArray.includes(7))
  ) {
    let playerOneWins = document.querySelector('h3')
    playerOneWins.textContent = 'Player One Wins!'
    // let hiddenBoard = document.querySelector('.play-area')
    // hiddenBoard.classList.add('hidden')
    let resetButton = document.querySelector('.reset')
    resetButton.classList.remove('hidden')
  }

  if (
    (playerTwoArray.includes(1) && playerTwoArray.includes(2) && playerTwoArray.includes(3)) ||
    (playerTwoArray.includes(4) && playerTwoArray.includes(5) && playerTwoArray.includes(6)) ||
    (playerTwoArray.includes(7) && playerTwoArray.includes(8) && playerTwoArray.includes(9)) ||
    (playerTwoArray.includes(1) && playerTwoArray.includes(4) && playerTwoArray.includes(7)) ||
    (playerTwoArray.includes(2) && playerTwoArray.includes(5) && playerTwoArray.includes(8)) ||
    (playerTwoArray.includes(3) && playerTwoArray.includes(6) && playerTwoArray.includes(9)) ||
    (playerTwoArray.includes(1) && playerTwoArray.includes(5) && playerTwoArray.includes(9)) ||
    (playerTwoArray.includes(3) && playerTwoArray.includes(5) && playerTwoArray.includes(7))
  ) {
    let playerTwoWins = document.querySelector('h3')
    playerTwoWins.textContent = 'Player Two Wins!'
    // let hiddenBoard = document.querySelector('.play-area')
    // hiddenBoard.classList.add('hidden')
    let resetButton = document.querySelector('.reset')
    resetButton.classList.remove('hidden')
  }

  if (
    (numberOfTurns === 9 && document.querySelector('h3').textContent === 'Player One Go!') ||
    (numberOfTurns === 9 && document.querySelector('h3').textContent === 'Player Two Go!')
  ) {
    let tieGame = document.querySelector('h3')
    tieGame.textContent = 'Tie Game!'
    // let hiddenBoard = document.querySelector('.play-area')
    // hiddenBoard.classList.add('hidden')
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

let boxLetter = true

let playerOneArray = []

let playerTwoArray = []

const fillBoxOneWithLetter = () => {
  console.log(boxLetter)
  if (boxLetter === true) {
    boxOne.textContent = 'X'
    playerOneArray.push(1)
    console.log(playerOneArray)
  } else {
    boxOne.textContent = 'O'
    playerTwoArray.push(1)
    console.log(playerTwoArray)
  }
  boxLetter = !boxLetter
}

const fillBoxTwoWithLetter = () => {
  if (boxLetter === true) {
    boxTwo.textContent = 'X'
    playerOneArray.push(2)
    console.log(playerOneArray)
  } else {
    boxTwo.textContent = 'O'
    playerTwoArray.push(2)
    console.log(playerTwoArray)
  }
  boxLetter = !boxLetter
}

const fillBoxThreeWithLetter = () => {
  if (boxLetter === true) {
    boxThree.textContent = 'X'
    playerOneArray.push(3)
    console.log(playerOneArray)
  } else {
    boxThree.textContent = 'O'
    playerTwoArray.push(3)
    console.log(playerTwoArray)
  }
  boxLetter = !boxLetter
}

const fillBoxFourWithLetter = () => {
  if (boxLetter === true) {
    boxFour.textContent = 'X'
    playerOneArray.push(4)
    console.log(playerOneArray)
  } else {
    boxFour.textContent = 'O'
    playerTwoArray.push(4)
    console.log(playerTwoArray)
  }
  boxLetter = !boxLetter
}

const fillBoxFiveWithLetter = () => {
  if (boxLetter === true) {
    boxFive.textContent = 'X'
    playerOneArray.push(5)
    console.log(playerOneArray)
  } else {
    boxFive.textContent = 'O'
    playerTwoArray.push(5)
    console.log(playerTwoArray)
  }
  boxLetter = !boxLetter
}

const fillBoxSixWithLetter = () => {
  if (boxLetter === true) {
    boxSix.textContent = 'X'
    playerOneArray.push(6)
    console.log(playerOneArray)
  } else {
    boxSix.textContent = 'O'
    playerTwoArray.push(6)
    console.log(playerTwoArray)
  }
  boxLetter = !boxLetter
}

const fillBoxSevenWithLetter = () => {
  if (boxLetter === true) {
    boxSeven.textContent = 'X'
    playerOneArray.push(7)
    console.log(playerOneArray)
  } else {
    boxSeven.textContent = 'O'
    playerTwoArray.push(7)
    console.log(playerTwoArray)
  }
  boxLetter = !boxLetter
}

const fillBoxEightWithLetter = () => {
  if (boxLetter === true) {
    boxEight.textContent = 'X'
    playerOneArray.push(8)
    console.log(playerOneArray)
  } else {
    boxEight.textContent = 'O'
    playerTwoArray.push(8)
    console.log(playerTwoArray)
  }
  boxLetter = !boxLetter
  // boxLetter = boxLetter ? false : true
}

const fillBoxNineWithLetter = () => {
  if (boxLetter === true) {
    boxNine.textContent = 'X'
    playerOneArray.push(9)
    console.log(playerOneArray)
  } else {
    boxNine.textContent = 'O'
    playerTwoArray.push(9)
    console.log(playerTwoArray)
  }
  boxLetter = !boxLetter
  boxLetter ? (boxLetter = false) : (boxLetter = true)
}

// if (
//   (playerOneArray.includes(1) && playerOneArray.includes(2) && playerOneArray.includes(3)) ||
//   (playerOneArray.includes(4) && playerOneArray.includes(5) && playerOneArray.includes(6)) ||
//   (playerOneArray.includes(7) && playerOneArray.includes(8) && playerOneArray.includes(9)) ||
//   (playerOneArray.includes(1) && playerOneArray.includes(4) && playerOneArray.includes(7)) ||
//   (playerOneArray.includes(2) && playerOneArray.includes(5) && playerOneArray.includes(8)) ||
//   (playerOneArray.includes(3) && playerOneArray.includes(6) && playerOneArray.includes(9)) ||
//   (playerOneArray.includes(1) && playerOneArray.includes(5) && playerOneArray.includes(9)) ||
//   (playerOneArray.includes(3) && playerOneArray.includes(5) && playerOneArray.includes(7))
// ) {
//   let playerOneWins = document.querySelector('h3')
//   playerOneWins.textContent('Player One Wins!')
// }

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

const main = () => {}

document.addEventListener('DOMContentLoaded', main)

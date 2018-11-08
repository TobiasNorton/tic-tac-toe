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
  } else {
    boxTwo.textContent = 'O'
    playerTwoArray.push(2)
  }
  boxLetter = !boxLetter
}

const fillBoxThreeWithLetter = () => {
  if (boxLetter === true) {
    boxThree.textContent = 'X'
    playerOneArray.push(3)
  } else {
    boxThree.textContent = 'O'
    playerTwoArray.push(3)
  }
  boxLetter = !boxLetter
}

const fillBoxFourWithLetter = () => {
  if (boxLetter === true) {
    boxFour.textContent = 'X'
    playerOneArray.push(4)
  } else {
    boxFour.textContent = 'O'
    playerTwoArray.push(4)
  }
  boxLetter = !boxLetter
}

const fillBoxFiveWithLetter = () => {
  if (boxLetter === true) {
    boxFive.textContent = 'X'
    playerOneArray.push(5)
  } else {
    boxFive.textContent = 'O'
    playerTwoArray.push(5)
  }
  boxLetter = !boxLetter
}

const fillBoxSixWithLetter = () => {
  if (boxLetter === true) {
    boxSix.textContent = 'X'
    playerOneArray.push(6)
  } else {
    boxSix.textContent = 'O'
    playerTwoArray.push(6)
  }
  boxLetter = !boxLetter
}

const fillBoxSevenWithLetter = () => {
  if (boxLetter === true) {
    boxSeven.textContent = 'X'
    playerOneArray.push(7)
  } else {
    boxSeven.textContent = 'O'
    playerTwoArray.push(7)
  }
  boxLetter = !boxLetter
}

const fillBoxEightWithLetter = () => {
  if (boxLetter === true) {
    boxEight.textContent = 'X'
    playerOneArray.push(8)
  } else {
    boxEight.textContent = 'O'
    playerTwoArray.push(8)
  }
  boxLetter = !boxLetter
  //boxLetter = boxLetter ? false : true
}

const fillBoxNineWithLetter = () => {
  if (boxLetter === true) {
    boxNine.textContent = 'X'
    playerOneArray.push(9)
  } else {
    boxNine.textContent = 'O'
    playerTwoArray.push(9)
  }
  boxLetter = !boxLetter
  // boxLetter ? (boxLetter = false) : (boxLetter = true)
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

const main = () => {}

document.addEventListener('DOMContentLoaded', main)

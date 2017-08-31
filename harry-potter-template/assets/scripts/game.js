const startGame = function startGame () {
  for (let i = 1; i <= 9; i++) {
    clearBoard(i)
  }
  document.turn = 'X'
  document.winner = null
  setMessage(document.turn + ' wizard, cast your spell.')
}

const setMessage = function setMessage (message) {
  document.getElementById('message').innerText = message
}

const nextMove = function nextMove (square) {
  if (document.winner != null) {
    setMessage(document.turn + ' has already won this duel. Restart the game to play again.')
  } else if (square.innerText === '') {
    square.innerText = document.turn
    switchTurn()
  } else {
    setMessage('Pick Another Square, Wizard!')
  }
}

const switchTurn = function switchTurn () {
  if (checkWinner(document.turn)) {
    setMessage('Mischeif Managed! ' + document.turn + ' has won the duel!')
    document.winner = document.turn
  } else if (document.turn === 'X') {
    document.turn = 'O'
    setMessage('It is ' + document.turn + 's turn.')
  } else {
    document.turn = 'X'
    setMessage('It is ' + document.turn + 's turn.')
  }
}

const checkWinner = function checkWinner (move) {
  let result = false
  if (checkRow(1, 2, 3, move) ||
 checkRow(4, 5, 6, move) ||
 checkRow(7, 8, 9, move) ||
 checkRow(1, 4, 7, move) ||
 checkRow(2, 5, 8, move) ||
 checkRow(3, 6, 9, move) ||
 checkRow(1, 5, 9, move) ||
 checkRow(3, 5, 7, move)) {
    result = true
  }
  return result
}

const checkRow = function checkRow (a, b, c, move) {
  let result = false
  if (getSquare(a) === move && getSquare(b) === move && getSquare(c) === move) {
    result = true
  }
  return result
}

const getSquare = function getSquare (number) {
  return document.getElementById('s' + number).innerText
}

const clearBoard = function clearBoard (number) {
  document.getElementById('s' + number).innerText = ''
}

console.log(startGame)
console.log(nextMove)
console.log(switchTurn)
console.log(setMessage)
console.log(checkRow)
console.log(getSquare)
console.log(checkWinner)
console.log(clearBoard)

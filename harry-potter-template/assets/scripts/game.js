'use strict'
// const game = require('./game')
const store = require('./store')

let gameArray = ['', '', '', '', '', '', '', '', '']
let turn = 'X'
let hasDraw = false

const fill = function (event) {
  const id = $(this).attr('id')
  // console.log(gameArray)
  if (gameArray[id] !== '') {
    // console.log('This square is taken. Please choose another!')
    $('#message').text('This square is taken. Please choose another!')
  } else if (gameArray[id] === '' && turn === 'X') {
    gameArray[id] = 'X'
    $('#' + id).text('X')
    $('#message').text('Wizard O, you shall now play.')
    // console.log(gameArray)
    checkForDraw(turn)
    checkForWinner(turn)
    turn = 'O'
    // console.log('X has played. It is O now.')
  } else {
    gameArray[id] = 'O'
    $('#' + id).text('O')
    $('#message').text('Wizard X, you shall now play.')
    checkForDraw(turn)
    checkForWinner(turn)
    // console.log(gameArray)
    turn = 'X'
  }
}

const checkRow = function (a, b, c, turn) {
  let result = false
  if (gameArray[a] === turn && gameArray[b] === turn && gameArray[c] === turn) {
    result = true
    $('.square').off()
  }
  return result
}

const checkForWinner = function (turn) {
  // console.log('checkWinner()')
  // console.log(gameArray)
  // console.log(turn)
  let result = false
  if (checkRow(0, 1, 2, turn) ||
     checkRow(3, 4, 5, turn) ||
     checkRow(6, 7, 8, turn) ||
     checkRow(0, 3, 6, turn) ||
     checkRow(1, 4, 7, turn) ||
     checkRow(2, 5, 8, turn) ||
     checkRow(0, 4, 8, turn) ||
     checkRow(2, 4, 6, turn) ||
     checkRow(0, 4, 8, turn)) {
    result = true
    store.gameOver = true
    // console.log('There is a winner')
    $('#message').text('Mischeif Managed! ' + turn + ' is the winner!')
    $('.square').off()
  }
  return result
}

const checkForDraw = function () {
  if (gameArray[0] !== '' && gameArray[1] !== '' && gameArray[2] !== '' &&
  gameArray[3] !== '' && gameArray[4] !== '' && gameArray[5] !== '' &&
  gameArray[6] !== '' && gameArray[7] !== '' && gameArray[8] !== '') {
    $('#message').text('Wizards, recast your spell. No one wins the duel.')
    hasDraw = true
  }
}

const reset = function () {
  // console.log('Mischeif Managed!')
  turn = 'X'
  gameArray = ['', '', '', '', '', '', '', '', '']
  store.gameOver = false
  $('.square').text('')
  $('#message').text('')
  $('#message').text('Wizard X, please cast your spell!')
  // console.log(gameArray)
}

const newGame = function () {
  event.preventDefault()
  if (store.gameOver === true) {
    $('.square').on('click', fill)
  }
  reset()
}

module.exports = {
  fill,
  checkForWinner,
  checkRow,
  checkForDraw,
  reset,
  newGame,
  hasDraw,
  turn
}

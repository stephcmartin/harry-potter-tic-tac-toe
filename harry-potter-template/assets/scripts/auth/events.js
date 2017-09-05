const getFormFields = require(`../../../lib/get-form-fields`)
const game = require('../game')
const store = require('../store')

const api = require('./api')
const ui = require('./ui')

$(() => {
  $('.square').on('click', game.fill)
  // $('#reset').on('click', game.newGame)
}
)

// $('#new-game').click(function () {
//   $('#board').show()
//   event.preventDefault()
// })

const onSignUp = function (event) {
  const data = getFormFields(this)
  // console.log('Signed Up Worked!')
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    // .then($('#board').show())
    // .then($('#change-password').show())
    // .then($('#sign-out').show())
    // .then($('#games-history').show())
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    // .then($('#board').show())
    // .then($('#board').show())
    // .then($('#change-password').show())
    // .then($('#sign-out').show())
    // .then($('#games-history').show())
    // .then(api.createGame)
    // .then(ui.createGameSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  const data = getFormFields(this)
  console.log(data)
  // console.log('You have changed password!')
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .then($('#games-history').show())
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('You have signed out!')
  api.signOut()
    .then(ui.signOutSuccess)
    .then($('#board').hide())
    .then($('#change-password').hide())
    .then($('#sign-out').hide())
    .catch(ui.signOutFailure)
}

const onCreateGame = function (event) {
  console.log('onCreateGame function works.')
  api.createGame()
    .then(ui.createGameSuccess)
    .then($('#games-history').show())
    .catch(ui.createGameFailure)
}

const onNewMove = function (event) {
  event.preventDefault()
  console.log('You have made a new move!')
  const gameOver = store.gameOver
  console.log(gameOver)
  const indexOfCell = $(event.target).attr('id')
  const player = $(event.target).text()
  console.log(gameOver, indexOfCell, player)
  console.log(store)
  api.newMove(gameOver, indexOfCell, player)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onGameHistory = function (event) {
  event.preventDefault()
  console.log('Game History Was pressed')
  api.gameHistory()
    .then(ui.getGameHistorySuccess)
    .catch(ui.getGameHistoryFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#sign-in').on('submit', onSignIn)
  $('#games-history').on('submit', onGameHistory)
  $('.square').on('click', onNewMove)
  $('#new-game-button').on('click', () => {
    onCreateGame()
    game.newGame()
    $('#board').show()
  })
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  addHandlers,
  onNewMove,
  onCreateGame,
  onGameHistory
}

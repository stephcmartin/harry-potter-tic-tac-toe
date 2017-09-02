const getFormFields = require(`../../../lib/get-form-fields`)
const game = require('../game')

const api = require('./api')
const ui = require('./ui')

$(() => {
  $('.square').on('click', game.fill)
  $('#reset').on('click', game.newGame)
}
)

$('#new-game').click(function () {
  $('#board').show()
  event.preventDefault()
})

const onSignUp = function (event) {
  const data = getFormFields(this)
  console.log('This Worked!')
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then($('#board').show())
    .then($('#change-password').show())
    .then($('#sign-out').show())
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('You have signed in!')
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then($('#board').show())
    .then($('#board').show())
    .then($('#change-password').show())
    .then($('#sign-out').show())
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  const data = getFormFields(this)
  console.log(data)
  console.log('You have changed password!')
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('You have signed out!')
  api.signOut()
    .then(ui.signOutSuccess)
    .then($('#board').hide())
    .then($('#change-password').hide())
    .then($('#sign-out').hide())
    .catch(ui.signOutFailure)
}

// const onCreateGame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.createGame(data)
//     .then(ui.CreateGameSuccess)
//     .catch(ui.CreateGameFailure)
// }
//
// const onNewMove = function (event) {
//   event.preventDefault()
//   console.log('You have made a new move!')
//     .then(api.newMove)
// }

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#sign-in').on('submit', onSignIn)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  addHandlers
  // onNewMove,
  // onCreateGame
}

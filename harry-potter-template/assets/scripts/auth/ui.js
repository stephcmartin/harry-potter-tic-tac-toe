const store = require('../store')

const signUpSuccess = function (data) {
  // console.log(data)
  store.user = data.user
  // console.log('Successfully signed up!')
  $('#message').text('You have succesfully signed up!')
  // $('#board').show()
  // $('#change-password').show()
  // $('#sign-out').show()
  // $('#new-game-button').show()
  // $('#games-history').show()
  $('#sign-up').hide()
  $('#sign-in').show()
}

const signUpFailure = function () {
  // console.error(error)
  $('#message').text('Error on sign up. Username might have been taken or there is a typo!')
}

const signInSuccess = function (data) {
  // console.log(data)
  // console.log('Successfully signed in!')
  $('#message').text('Aparecium! You have succesfully signed in!')
  // $('#board').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#new-game-button').show()
  $('#games-history').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  store.user = data.user
}

const signInFailure = function () {
  // console.error(error)
  $('#message').text('Error with your login, buddy!')
    .then($('#board').hide())
    .then($('#change-password').hide())
    .then($('#sign-out').hide())
}

const changePasswordSuccess = function () {
  // console.log('Successfully changed password!')
  $('#message').text('Aparecium! You have succesfully changed password!')
}

const changePasswordFailure = function () {
  // console.error(error)
  $('#message').text('Error wtih changing your password, buddy!')
    .then($('#board').hide())
    .then($('#change-password').hide())
    .then($('#sign-out').hide())
}

const signOutSuccess = function (data) {
  // console.log(data)
  // console.log('Successfully changed password!')
  $('#message').text('You have succesfully signed out!')
  store.user = null
  store.game = null
  // console.log(store.user)
  $('#new-game-button').hide()
  $('#games-history').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}

const signOutFailure = function () {
  // console.log(error)
  // console.error(error)
  $('#message').text('Error wtih signing out, buddy!')
    .then($('#board').hide())
    .then($('#change-password').hide())
    .then($('#sign-out').hide())
}

const createGameSuccess = function (data) {
  // console.log('Aberto! You have created a new game succesfully')
  // console.log(data)
  store.gameStore.id = data.game.id
  // console.log(data.game)
}

const createGameFailure = function () {
  // console.error(error)
  $('#message').text('Error with your game creation, ya Wizard!')
}

const getGameHistorySuccess = function (data) {
  store.games = data.games
  // console.log(data.games)
  // console.log('You have your game history')
  $('#message').text(JSON.stringify(store.games.length) + ' games have been played.')
}

const getGameHistoryFailure = function () {
  // console.error(error)
  // console.log('You Failed At Getting Your Game History Games')
  $('#message').text('You Failed At Getting Your Game History.')
}

// const newGameSuccess = function (data) {
//   console.log(data)
//   console.log('You have patched in your game status')
//   store.gameStore.id = data.game.id
//   console.log(store.gameStore.id)
// }
//
// const newGameFailure = function (error) {
//   console.error(error)
//   console.log('You Failed At Getting Your Game History Games')
//   $('#message').text('You have failed to patch in your game status')
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure,
  getGameHistorySuccess,
  getGameHistoryFailure
}

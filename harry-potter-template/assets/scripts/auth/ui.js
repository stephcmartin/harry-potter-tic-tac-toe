const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed up!')
  $('#message').text('You have succesfully signed up!')
  // This doesn't really work yet - need to create a logic that 'shows board' after signup
  $('#board').show()
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up. Username might have been taken or there is a typo!')
}

const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed in!')
  $('#message').text('Aparecium! You have succesfully signed in!')
  $('#board').show()
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error with your login, buddy!')
}

const changePasswordSuccess = function () {
  console.log('Successfully changed password!')
  $('#message').text('Aparecium! You have succesfully changed password!')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error wtih changing your password, buddy!')
}

const signOutSuccess = function (data) {
  console.log(data)
  console.log('Successfully changed password!')
  $('#message').text('You have succesfully signed out!')
  store.user = null
  console.log(store.user)
}

const signOutFailure = function (error) {
  console.log(error)
  console.error(error)
  $('#message').text('Error wtih signing out, buddy!')
}

const createGameSuccess = function (data) {
  console.log('Aberto! You have created a new game succesfully')
  console.log(data)
  store.gameStore = data.game.id
}

const createGameFailure = function (error) {
  console.error(error)
  $('#message').text('Error with your game creation, ya Wizard!')
}

const getGameHistorySuccess = function (data) {
  console.log(data)
  console.log('You have your game history')
  $('#message').text('You have your game history succesfully retrived.')
}

const getGameHistoryFailure = function (error) {
  console.error(error)
  console.log('You Failed At Getting Your Game History Games')
  $('#message').text('You Failed At Getting Your Game History.')
}

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

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed up!')
  $('#message').text('You have succesfully signed up!')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up. Username might have been taken or there is a typo!')
}

const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed in!')
  $('#message').text('You have succesfully signed in!')
  $('#new-game').click(function () {
    $('#board').show()
    event.preventDefault()
  })
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error with your login, buddy!')
}

const changePasswordSuccess = function () {
  console.log('Successfully changed password!')
  $('#message').text('You have succesfully changed password!')
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

// const createGameSuccess = function (data) {
//   console.log(data)
//   console.log('Successfully created game!')
//   $('#message').text('You have succesfully signed in!')
//   store.game = data.game
//   console.log(store.data)
// }
//
// const createGameFailure = function (error) {
//   console.error(error)
//   $('#message').text('Error with your game creation, buddy!')
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
  // createGameSuccess,
  // createGameFailure
}

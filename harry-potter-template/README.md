Timeline: 6 days
# Try To Play My Game:
[Click Here for demo](https://stephcmartin.github.io/harry-potter-tic-tac-toe/harry-potter-template/)

# My Development Process:
1.) Wire Frame and Game Store<br>
Before I started coding, I wrote down the basic functions that I knew my game needed, as well as the overall astehtics, theme and layout that I wanted. [In case you want to take a sneak peak this is my wireframe.](https://imgur.com/a/ey76B)<br>
2.) Building the Game UI<br>
I created a workable gameboard representation which handled user actions. I had wanted to use bootstrap to make it responsive. However - being not too familiar with bootstap, I realised I could use a table, too. I therefore created 3 rows with 3 squares each. <br>
3.) Game Logic<br>
I then began with creating the game logic to implement the game. However, I wrote my game using the DOM instead of storing my data in the arrays on the first day. [This a look at my old code here](https://github.com/stephcmartin/harry-potter-tic-tac-toe/blob/master/harry-potter-template/assets/scripts/oldDomGameLogic.js). <br>Luckily, I had allocated 2 days to create my basic game function and had enough time to craft up a simole tic tac toe game function. I also used the checkForWinner function from my old code and imported it into my new code.<br>
4.) Implementing Authentication<br>
I followed the Authentication template repo we worked on in class and changed some code to fit my authentication UI implementation.<br>
5.) Linking the Game to the Games API<br>
I struggled a lot without linking up the game files to the auth files. I had allocated 2 days to create this part. In reality this took 4 days and a ton of issue queue. There was a lot of ground that we didn’t cover in class that was needed to make things work. Issue queues became my best friend.<br>
6.) Polishing my CSS<br>
After resloving my game logic and auth issues, I polished up my CSS.<br>

# Basic Functionality Of The Game (That I Knew I Would Need):
* A set of states of the game. In my game, each state would represent a certain configuration of the grid.
* A finite set of actions: only one action a player can do which is put his/her letter on an empty cell.
* A transition function: takes the current state and the played action and returns the next state in the game.
* A terminal test function that checks if a state is terminal/ if there is a winner.
* A score function that calculates the score of the player at a terminal state.

# Technologies Used To Build This Game:
* Client
    * jQuery
    * HTML
    * SCSS
* Build System
    * Grunt
    * Webpack
* Deployment
    * Github Pages
* Version Control
    * Git
    * Github

# User Stories - What A User Could Expect From The Game:
1. As a user, I want to play tic-tac-toe with my friend on the same computer.
2. As a user, I want to register log-in so that I can save and track my games.
3. As a user, I want to track my past game data.
4. As a user, I want a notification that clearly shows the outcome of a game.
5. As a user, I can login using my email address and password and expect to retrieve my games played.
6. As a user, I want to be able to change my password
7. As a user, I want to be able to log out.

# Some Basic Game Code Logic That I Knew I Needed:
* checkIfLegal - to see if the move can be made/if the square has been taken
* changeBoard - update board after each move
* displayBoard after change
* changePlayer - between X and O
* checkForWinner - check to see if move match the winning combo
* checkIfTie - check to see if no one wins the game.

# My Initial Wireframe
[This was my initial wireframe. You can take a look here.](https://imgur.com/a/ey76B)

# Things I Didn't Know I Would Need:
* How to PATCH after every move - i.e the serve needs to know who has made a move and what was moved. This single handedly was the hardest part of the whole project.
* How to stringify a JSON object to display 'how many games have been played'
* What STORE actually is and how to use it.
* How to upload images that can be deployed. (I now know it has to be in the root directory.)
* The the inputs of X and O need to be in an array.

# Code I Am Most Proud Of:
1.) Making a PATCH request every time a move is made on the board. I needed 3 different inputs that went into the function. This was gorund we didn't cover in class and I'm pretty pound of it.

```js
const newMove = function (gameOver, indexOfCell, player) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.gameStore.id,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': indexOfCell,
          'value': player
        },
        'over': gameOver
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
```

2.) My check for winner and check for draw functions. I updated this from my old code that uterlised the DOM to play.
```js
const checkRow = function (a, b, c, turn) {
  let result = false
  if (gameArray[a] === turn && gameArray[b] === turn && gameArray[c] === turn) {
    result = true
    $('.square').off()
  }
  return result
}

const checkForWinner = function (turn) {
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
    $('#message').text('Mischeif Managed! ' + turn + ' is the winner!')
    $('.square').off()
  }
  return result
}

```
# List Of Unsolved Problems Which Would Be Fixed In Future Iterations:

One major part that I would love to improve on is the CSS.
* I would still love to learn how to incorporate photos into my project. i.e add a creative banner + logo.
* Add animation! Would be great to have the background change between the different houses and have it slightly animated.
* Change the X and Os to Wands and a quidditch.
* Move my Message Board lower - so that the player wouldn't need to scroll up to read it.
* Scoreboard of the two players.

Non-CSS related:
* Write more DRY code - there are a lot of CSS code that could be put into functions. Which would be more effective.
* Potentially a palyer vs. computer game that incorporated AI.
* Create better seperation of concerns. Currently all of my game related functions are in one file.

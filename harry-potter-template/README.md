Timeline: 6 days

Development Process:
#1 Game Logic
I began with creating the game logic to implement the game. However, I wrote my game using the DOM instead of storing my data in the arrays. Luckily, I had allocated 2 days to create my basic game function.
#2 Building the Game UI
I created a workable gameboard representation which handled user actions.
#3 Implementing Authentication
I followed the Authentication template repo we worked on in class and changed some code to fit my authentication UI implementation. I had allocated 2 days to create this part.
#4 Linking the Game to the Games API
I struggled a lot without linking up the game files to the auth files. There was a lot of ground that we didn’t cover in class that was needed to make things work. Issue queues became my best friend.

Functions that were needed:
* A set of states of the game. In our game, each state would represent a certain configuration of the grid.
* 2 players which are the agents playing the game. In Tic-Tac-Toe there’s only two players: the human player and the AI.
* A finite set of actions: only one action a player can do which is put his/her letter on an empty cell.
* A transition function: takes the current state and the played action and returns the next state in the game.
* A terminal test function that checks if a state is terminal/ if there is a winner.
* A score function that calculates the score of the player at a terminal state.

Technologies Use:
* Client
    * jQuery - For UI manipulation and AJAX calls
    * SASS
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

User Stories:

1. As a user, I want to play tic-tac-toe with my friend on the same computer.
2. As a user, I want to register log-in so that I can save and track my games.
3. As a user, I want to track my past game data As a user.
4. As a user, I want a notification that clearly shows the outcome of a game.
5. As a user, I can login using my email address and password and expect to retrieve my games played.
6. As a user, I want to be able to change my password
7. As a user, I want to be able to log out.

Functions that we will need:
* A set of states of the game. In our game, each state would represent a certain configuration of the grid.
* 2 players which are the agents playing the game. In Tic-Tac-Toe there’s only two players: the human player and the AI.
* A finite set of actions: only one action a player can do which is put his/her letter on an empty cell.
* A transition function: takes the current state and the played action and returns the next state in the game.
* A terminal test function that checks if a state is terminal/ if there is a winner.
* A score function that calculates the score of the player at a terminal state.

Some Game Code Logic:
* checkIfLegal
* changeBoard
* displayBoard after change
* changePlayer
<!-- public char changePlayer(char player) {
    return player == 'o' ? 'x' : 'o';
}  -->
* checkIfWinner - use if else statement of an array
* checkIfTie

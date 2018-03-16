const rock = 'Rock';
const paper = 'Paper';
const scissor = 'Scissor';

let playerOne = { choice: '' };
let playerTwo = { choice: '' };

const playerChoice = (choice, player) => {
  console.log(`Player.choice changed to: ${choice}`);
  player.choice = choice;
}

const checkGame = (playerOne, playerTwo) => {
  console.log(playerOne, playerTwo);

  // Check if both players have made their choices
  if (!(playerOne.choice && playerTwo.choice)) {
    console.log('Both players have not made a choice yet');
    return;
  }
  console.log('Both players have made their choices');

  // Calculate the winner
  let playerOneWon = null;
  if (playerOne.choice == rock) {
    if (playerTwo.choice == paper) {
      playerOneWon = false;
    }
    if (playerTwo.choice == scissor) {
      playerOneWon = true;
    }
  }
  else if (playerOne.choice == paper) {
    if (playerTwo.choice == rock) {
      playerOneWon = true;
    }
    if (playerTwo.choice == scissor) {
      playerOneWon = false;
    }
  }
  else if (playerOne.choice == scissor) {
    if (playerTwo.choice == rock) {
      playerOneWon = false;
    }
    if (playerTwo.choice == paper) {
      playerOneWon = true;
    }
  }
  // Show who won
  let winner = document.querySelector(".win");
  if (playerOneWon == null) {
    winner.textContent = 'Winner: Draw'
  } else if (playerOneWon == true) {
    winner.textContent = 'Winner: Player One'
  } else {
    winner.textContent = 'Winner: Player Two'
  }


  // Restart Game
  playerOne.choice = "";
  playerTwo.choice = "";
  
}

const main = () => {

}

document.addEventListener('DOMContentLoaded', main)

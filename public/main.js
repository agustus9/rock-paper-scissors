const rock = 'Rock';
const paper = 'Paper';
const scissor = 'Scissor';

let playerOne = { choice: '' };
let playerTwo = { choice: '' };

const playerOneChoice = (choice) => {
  console.log(`Player 1 choose: ${choice}`);
  playerOne.choice = choice;
}

const playerTwoChoice = (choice) => {
  console.log(`Player 2 choose: ${choice}`);
  playerTwo.choice = choice;
}

const main = () => {
 
}

document.addEventListener('DOMContentLoaded', main)

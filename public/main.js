const rock = 'Rock';
const paper = 'Paper';
const scissor = 'Scissor';

let playerOne = { choice: '' };
let playerTwo = { choice: '' };

const playerChoice = (choice, player) => {
  console.log(`Player.choice changed to: ${choice}`);
  player.choice = choice;
}

const main = () => {
 
}

document.addEventListener('DOMContentLoaded', main)

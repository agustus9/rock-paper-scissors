const main = () => {
  document.querySelector('h1').textContent += ''

  const user = prompt("Rock, Paper, or Scissors?");
  const computer = Math.random();

  if (computer <= 0.33) {
    computer = "rock";
  } else if (computer <= 0.66) {
    computer = "paper";
  } else {
    computer = "scissors";
  }
  const compare = function(user, computer) {
    if (user === computer) {
      alert("It is a tie!");
    }
  }
}

document.addEventListener('DOMContentLoaded', main)

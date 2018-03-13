const main = () => {
  document.querySelector('h1').textContent += ''

  let user = prompt("Rock, Paper, or Scissors?");
  let computer = Math.random();

  if (computer <= 0.33) {
    computer = "rock";
  } else if (computer <= 0.66) {
    computer = "paper";
  } else {
    computer = "scissors";
  }
  const compare = function (user, computer) {
    if (user === computer) {
      alert("It is a tie!");
    } else if (user === "rock") {
      if (computer === "scissors") {
        alert("Rock wins!");
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', main)

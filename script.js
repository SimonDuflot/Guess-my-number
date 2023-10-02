"use strict";

//Implementing const
const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ Not a number!";

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct number !";

    //When guess superior to secretNumber
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector("message").textContent = "Too high! Go again.";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".mesage").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }

    //When guess inferior to secretNumber
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector((".message".textContent = "Too low ! Try again."));
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector("message").textContent =
        "You lost the game ! Do better next time please";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// guess = secretNumber

// guess > secretNumber

// guess < secretNumber

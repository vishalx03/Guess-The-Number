("use strict");
//generating secret number
let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const triggerConfetti = function () {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti({
    confettiRadius: 5,
    confettiNumber: 800,
  });
};
// console.log(score);

// we can refactore our code by using functions instead of using same line of code again and again

// display message code
const displayMsg = function (message) {
  document.querySelector(".message").textContent = message;
}; // now we can use this function in our code whenever we want to display a message

// listining value for input
document.querySelector(".check").addEventListener("click", function () {
  // storing guess value to variable

  const guessVal = Number(document.querySelector(".guess").value);

  //checking for empty values
  if (guessVal === 0) {
    // document.querySelector(".message").textContent = "Number Not Entered 😡"; insted of entire code use the function we made for this code
    displayMsg("Number Not Entered 😡");
  } else if (guessVal === randomNumber) {
    // setting msg to correct
    // document.querySelector(".message").textContent = "Correct guess 🏆";
    triggerConfetti();
    displayMsg("Correct guess 🏆");
    //  displying secret number
    document.querySelector(".number").textContent = randomNumber;

    // changing background
    document.querySelector("body").style.backgroundColor = "green";

    //stle secret number box
    document.querySelector(".number").style.width = "30rem";

    // setting highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // if value is not equal to secret number
  } else {
    // decreasing score by 1
    // document.querySelector(".score").textContent =
    //   Number(document.querySelector(".score").textContent) - 1; this is ok but bad way as jonas say insted make a variable for score in decrease it and also check for score to be 0 if score = 0 means you lose the game

    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      // document.querySelector(".message").textContent =
      //   guessVal > randomNumber ? "Too high 📈" : "Too Low 📉";

      displayMsg(guessVal > randomNumber ? "Too high 📈" : "Too Low 📉");

      // if (guessVal > randomNumber) {
      //   document.querySelector(".message").textContent = "Too High ⬆️";
      // } else if (guessVal < randomNumber) {
      //   document.querySelector(".message").textContent = "Too Low ⬇️";
      // }
    } else {
      // document.querySelector(".message").textContent = "You Lost the Game 🥹";
      displayMsg("You Lost the Game 🥹");
      document.querySelector(".score").textContent = 0;
    }

    // checking how high or low is user guess
  }

  // checking if value is correct
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  // document.querySelector(".message").textContent = "Start guessing";
  displayMsg("start guessing");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  randomNumber = Math.floor(Math.random() * 20) + 1;
});

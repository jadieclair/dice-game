// Initialize player scores as an array
let playerScores = [0, 0]; // playerScores[0] represents player 1 score, playerScores[1] represents player 2 score

// assign players name with a try/catch.

function editNames() {
  try {
    let player1 = prompt("Change Player 1 Name");
    let player2 = prompt("Change Player 2 Name");

    // limit the name length due to limiting over complication

    if (player1.trim().length === 0 || player2.trim().length === 0) {
      throw new Error("Please enter valid names");
    } else if (player1.trim().length > 7) {
      throw new Error(player1 + "'s name is longer than 7 characters");
    } //name of player1 cannot exceed 7 characters

    if (player2.trim().length > 7) {
      throw new Error(player2 + "'s name is longer than 7 characters");
    } //name of player2 cannot exceed 7 characters

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player1s").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
    document.querySelector("p.Player2s").innerHTML = player2;
  } catch (error) {
    alert(error.message);
  }
}

// assign the dice roll -function to assign the random dice img

function rollTheDice() {
  try {
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");

    // assign GIF - when the button is clicked, it activated the GIF

    diceNum1.setAttribute("src", "diceroll.gif");
    diceNum2.setAttribute("src", "diceroll.gif");

    // assign output to the heading while using a Math random and floor

    let result = document.querySelector("h1");
    result.innerHTML = "";
    setTimeout(() => {
      let randomNumber1 = Math.floor(Math.random() * 6) + 1;
      let randomNumber2 = Math.floor(Math.random() * 6) + 1;

      diceNum1.setAttribute("src", "dice" + randomNumber1 + ".png");
      diceNum2.setAttribute("src", "dice" + randomNumber2 + ".png");

      // determine the winner based onand if/else statement with either player winning and or a draw

      if (randomNumber1 === randomNumber2) {
        result.innerHTML = "Draw!"; //no point will be added to player1's or player2's score
      } else if (randomNumber1 < randomNumber2) {
        result.innerHTML =
          document.querySelector("p.Player2").innerHTML + " WINS!";
        playerScores[1]++; // Increase player 2 score
        document.querySelector(".player2-score").innerHTML = playerScores[1];
      } else {
        result.innerHTML =
          document.querySelector("p.Player1").innerHTML + " WINS!";
        playerScores[0]++; // Increase player 1 score
        document.querySelector(".player1-score").innerHTML = playerScores[0];
      }
    }, 2500);

    // catch error to display if game malfunctions
  } catch (error) {
    alert("An error occurred while rolling the dice. Please try again.");
    console.error(error);
  }
}

// below function assigns the audio on clicked button

let play = document.getElementById("play");
function playMusic() {
  let audio = new Audio("short-crowd-cheer-6713.mp3");
  audio.play();
}

play.addEventListener("click", playMusic);

let goldCoins = 0; //The totalCoins variable keeps track of the total number of coins won, and rollsLeft variable keeps track of the remaining rolls.
let rollsLeft = 10;

function rollDice() {
  if (rollsLeft === 0) {
    document.getElementById("result").textContent = "No more rolls left!";
    return;
  }

  rollsLeft--; //decrement rollsLeft by 1

  const rollResult = Math.floor(Math.random() * 6) + 1;
  displayDiceImage(rollResult);

  if (rollResult === 1) {
    document.getElementById("result").textContent =
      "You rolled a 1. Game over!";
    rollsLeft = 0;
  } else if (rollResult >= 2 && rollResult <= 4) {
    document.getElementById("result").textContent =
      "You rolled " + rollResult + ". You do not win coins, roll again!";
  } else if (rollResult === 5) {
    goldCoins += 5;
    document.getElementById("result").textContent =
      "You rolled a 5. You win 5 gold coins and get to roll again!";
  } else if (rollResult === 6) {
    goldCoins += 6;
    document.getElementById("result").textContent =
      "You rolled a 6. You win 6 gold coins and get to roll again!";
  }

  document.getElementById("goldCoins").textContent =
    "Total Coins: " + goldCoins;
}

function displayDiceImage(rollResult) {
  const diceImg = document.getElementById("diceImg");
  diceImg.style.display = "block";
  diceImg.src = "dice" + rollResult + ".png"; // way to perform string interpolation. Replace 'dice1.png', 'dice2.png', etc., with your actual dice images.
}

// Function to reset the game and totalCoins if needed
function resetGame() {
  goldCoins = 0;
  rollsLeft = 10;
  document.getElementById("goldCoins").textContent =
    "Total Coins: " + goldCoins;
  document.getElementById("result").textContent = "";
  document.getElementById("diceImg").style.display = "none";
}

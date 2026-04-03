const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let score = 0;
let highestScore = localStorage.getItem("highestScore") || 0; 
let gameOver = false;
let gamePaused = true;
let currentRailIndex = 1;
const railPositions = [80, 240, 400];
const coins = [];
const obstacles = [];
let animationFrame;
let railOffset = 0;

// Load background textures
const backgrounds = {
  low: new Image(),
  medium: new Image(),
  high: new Image(),
};

// Load sound effects
const coinSound = new Audio("./assets/coin-collection.mp3");
const bombSound = new Audio("./assets/bomb-explosion.mp3");
const backgroundMusic = new Audio("./assets/background-music.mp3");

backgrounds.low.src = "./assets/brown-rock.png"; // Low score background
backgrounds.medium.src = "./assets/brown-dark.png"; // Medium score background
backgrounds.high.src = "./assets/gray-rock.png"; // High score background

const cart = {
  x: railPositions[currentRailIndex] - 40,
  y: canvas.height - 100,
  width: 100,
  height: 80,
};

const cartImage = new Image();
cartImage.src = "./assets/main-object.gif";
const rockImage = new Image();
rockImage.src = "./assets/rock.gif";
const bombImage = new Image();
bombImage.src = "./assets/bomb.gif";
const coinImage = new Image();
coinImage.src = "./assets/coin.gif";

// Display overlay with a custom message and toggle button visibility
function displayOverlay(message, showPlayButton = true) {
  const overlay = document.getElementById("overlay");
  overlay.querySelector("h2").textContent = message;
  overlay.style.display = "flex";
  document.getElementById("playButton").style.display = showPlayButton
    ? "inline"
    : "none";
  document.getElementById("retryButton").style.display = "inline";
}

function hideOverlay() {
  document.getElementById("overlay").style.display = "none";
}

// Generate coins randomly
function generateCoins() {
  if (Math.random() < 0.02) {
    const rail = Math.floor(Math.random() * railPositions.length);
    coins.push({ x: railPositions[rail], y: 0, radius: 20 });
  }
  coins.forEach((coin, i) => {
    coin.y += 3;
    if (coin.y > canvas.height) coins.splice(i, 1);
  });
}

// Generate obstacles randomly
function generateObstacles() {
  if (Math.random() < 0.005) {
    const rail = Math.floor(Math.random() * railPositions.length);
    obstacles.push({
      x: railPositions[rail],
      y: 0,
      type: Math.random() < 0.5 ? "rock" : "bomb",
    });
  }
  obstacles.forEach((obstacle, i) => {
    obstacle.y += 3;
    if (obstacle.y > canvas.height) obstacles.splice(i, 1);
  });
}

// Detect collisions between the cart, coins, and obstacles
function detectCollisions() {
  coins.forEach((coin, i) => {
    if (
      cart.x < coin.x + coin.radius &&
      cart.x + cart.width > coin.x &&
      cart.y < coin.y + coin.radius &&
      cart.y + cart.height > coin.y
    ) {
      coins.splice(i, 1);
      score += 10;
      coinSound.play();
    }
  });

  obstacles.forEach((obstacle) => {
    if (
      cart.x < obstacle.x + 10 &&
      cart.x + cart.width > obstacle.x &&
      cart.y < obstacle.y + 10 &&
      cart.y + cart.height > obstacle.y
    ) {
      gameOver = true;
      bombSound.play();
      // Update highest score if the current score is greater
      if (score > highestScore) {
        highestScore = score;
        localStorage.setItem("highestScore", highestScore);
      }
      displayOverlay(
        `Game Over\n Current Score: ${score}\n Highest: ${highestScore}`,
        false
      );
      cancelAnimationFrame(animationFrame);
      sendScore(score, 'Rail Rush');
    }
  });
}

// Draw the rails with offset for movement
function drawRails() {
  railOffset += 2;
  if (railOffset > 40) railOffset = 0;

  ctx.lineWidth = 4;
  ctx.strokeStyle = "#555";

  railPositions.forEach((x) => {
    ctx.beginPath();
    ctx.moveTo(x - 20, 0);
    ctx.lineTo(x - 20, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + 20, 0);
    ctx.lineTo(x + 20, canvas.height);
    ctx.stroke();

    for (let i = railOffset; i < canvas.height; i += 40) {
      ctx.beginPath();
      ctx.moveTo(x - 22, i);
      ctx.lineTo(x + 22, i);
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#888";
      ctx.stroke();
    }
  });
}

// Draw the background texture based on score
function drawBackground() {
  let backgroundImage;
  if (score <= 1000) {
    backgroundImage = backgrounds.low;
  } else if (score <= 2000) {
    backgroundImage = backgrounds.medium;
  } else {
    backgroundImage = backgrounds.high;
  }

  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}

// Draw cart
function drawCart() {
  ctx.drawImage(cartImage, cart.x, cart.y, cart.width, cart.height);
}

// Draw coins
function drawCoins() {
  coins.forEach((coin) => {
    ctx.drawImage(coinImage, coin.x - 20, coin.y - 20, 40, 40);
  });
}

// Draw obstacles
function drawObstacles() {
  obstacles.forEach((obstacle) => {
    const img = obstacle.type === "rock" ? rockImage : bombImage;
    const size = obstacle.type === "rock" ? 80 : 60;
    ctx.drawImage(
      img,
      obstacle.x - size / 2,
      obstacle.y - size / 2,
      size,
      size
    );
  });
}

// Display score
function drawScore() {
  ctx.fillStyle = "#fff";
  ctx.font = "24px Arial";
  ctx.fillText(`Score: ${score}`, 10, 30);
}

// Open menu function to pause game
function openMenu() {
  if (!gamePaused) {
    gamePaused = true;
    cancelAnimationFrame(animationFrame);
    displayOverlay("Game Paused");
  }
}

// Game loop function
function gameLoop() {
  if (gameOver) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground(); // Draw background texture
  drawRails();
  generateCoins();
  generateObstacles();
  detectCollisions();
  drawCart();
  drawCoins();
  drawObstacles();
  drawScore();
  backgroundMusic.play();

  animationFrame = requestAnimationFrame(gameLoop);
}

// Start game function
function startGame() {
  if (gamePaused) {
    gamePaused = false;
    hideOverlay();
    gameLoop();
  }
}

// Reset game function
function resetGame() {
  score = 0;
  gameOver = false;
  coins.length = 0;
  obstacles.length = 0;
  currentRailIndex = 1;
  cart.x = railPositions[currentRailIndex] - 40;
  hideOverlay();
  gamePaused = false;
  gameLoop();
}

document.addEventListener("DOMContentLoaded", function () {
  // Set the source for the left arrow image
  document.getElementById("left-arrow").src = "./assets/left-arrow-red.png"; // Replace with the actual path

  // Set the source for the right arrow image
  document.getElementById("right-arrow").src = "./assets/right-arrow-red.png"; // Replace with the actual path
});

function moveLeft() {
  if (currentRailIndex > 0) {
    // Ensure it's within bounds
    currentRailIndex--; // Move left by one rail index
    cart.x = railPositions[currentRailIndex] - 40; // Update cart position based on the new index
  }
}

function moveRight() {
  if (currentRailIndex < railPositions.length - 1) {
    // Ensure it's within bounds
    currentRailIndex++; // Move right by one rail index
    cart.x = railPositions[currentRailIndex] - 40; // Update cart position based on the new index
  }
}

// Menu button to toggle pause and display overlay
document.getElementById("menuButton").addEventListener("click", openMenu);

document.addEventListener("keydown", (event) => {
  if (!gamePaused) {
    if (event.key === "ArrowLeft") {
      moveLeft(); // Call the moveLeft function
    } else if (event.key === "ArrowRight") {
      moveRight(); // Call the moveRight function
    }
  }
});

// Show initial overlay with welcome message
displayOverlay("Press Play to Start");

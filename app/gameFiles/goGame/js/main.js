import Player from "./player.js";
import { handleInput } from "./input.js";
import { applyGravity, checkCollision } from "./physics.js";
import { createMap } from "./terrain.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set initial canvas size based on window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gameOver = false;
let player = new Player(50, 300);
let { platforms, coins, monsters } = createMap();

let score = 0;
let highestScore = 0; // Track the highest score
let level = 1; // Start at level 1

// Background images for different levels
const backgrounds = {
  level1: "./assets/level1.png", // Level 1 background
  level2: "./assets/level2.png", // Level 2 background
  level3: "./assets/level3.png", // Level 3 background
  level4: "./assets/level4.png", // Level 4 background
  level5: "./assets/level5.png", // Level 5 background
};
let background = new Image();
background.src = backgrounds.level1; // Initial background for level 1
const backgroundMusic = new Audio("./assets/background-music.mp3");

// Camera offset to follow the player
let offsetX = 0;

// Calculate scale factor based on canvas width and height
let scaleFactor = canvas.width / 800; // Base width of 800px for scaling
const gameOverlay = document.getElementById("gameOverlay");
const retryButton = document.getElementById("retryButton");
const nextLevelButton = document.getElementById("nextLevelButton");
const gameMessageContainer = document.getElementById("gameMessageContainer");
const startOverButton = document.getElementById("startOverButton"); // Start Over button

// Draw the background with a parallax effect
function drawBackground() {
  const bgWidth = canvas.width * 2; // Repeat background for width continuity
  ctx.drawImage(background, -offsetX % bgWidth, 0, bgWidth, canvas.height);
  ctx.drawImage(
    background,
    (-offsetX % bgWidth) + bgWidth,
    0,
    bgWidth,
    canvas.height
  );
}

// Reset the game state
function resetGame() {
  gameOver = false;
  player = new Player(50, 300); // Reset player to initial position
  const mapData = createMap(); // Recreate the map
  platforms = mapData.platforms;
  coins = mapData.coins;
  monsters = mapData.monsters;
  offsetX = 0; // Reset camera offset
  gameOverlay.style.display = "none"; // Hide overlay
  score = 0; // Reset score
  level = 1; // Reset level to 1
  setBackgroundForLevel(level); // Set background for level 1
  gameLoop(); // Restart the game loop
}

function nextLevel() {
  gameOver = false;
  player = new Player(50, 300); // Reset player to initial position
  const mapData = createMap(); // Recreate the map
  platforms = mapData.platforms;
  coins = mapData.coins;
  monsters = mapData.monsters;
  offsetX = 0; // Reset camera offset
  gameOverlay.style.display = "none"; // Hide overlay
  gameMessageContainer.textContent += ` Level ${level}`; // Append the current level text
  gameLoop();
}

// Change background based on the level
function setBackgroundForLevel(level) {
  switch (level) {
    case 1:
      background.src = backgrounds.level1;
      break;
    case 2:
      background.src = backgrounds.level2;
      break;
    case 3:
      background.src = backgrounds.level3;
      break;
    case 4:
      background.src = backgrounds.level4;
      break;
    case 5:
      background.src = backgrounds.level5;
      break;
    default:
      background.src = backgrounds.level1;
  }
}

// Check if player has reached the level goal
function checkLevelGoal() {
  if (player.x >= 30500) {
    // Adjust based on your level goal
    gameMessageContainer.textContent = "Game Over!";
    highestScore = Math.max(score, highestScore); // Update the highest score
    gameOver = true; // End the game when reaching the goal

    // Transition to the next level or restart after last level
    if (level <= 5) {
      gameMessageContainer.textContent = `Level ${level} completed!`; // Update the message
      level++; // Move to next level
      setBackgroundForLevel(level); // Set the background for the new level
    } else {
      // If all levels are completed, show the "Start Over" button
      level = 1;
      gameMessageContainer.textContent =
        "You completed all levels! Starting fresh...";
      startOverButton.style.display = "block"; // Show the Start Over button
    }

    // Show the overlay and the retry button
    gameOverlay.style.display = "flex";
    document.getElementById("highestScore").textContent = highestScore;

    // Show the next level button for the player to continue
    if (level <= 5) {
      nextLevelButton.style.display = "flex";
    }
  }
}

// Handle level change and reset for next level
nextLevelButton.addEventListener("click", () => {
  nextLevelButton.style.display = "none"; // Hide next level button
  nextLevel(); // Reset the game for the next level
});

// Handle the start over action
startOverButton.addEventListener("click", () => {
  startOverButton.style.display = "none"; // Hide start over button
  resetGame(); // Restart the game
});

// Main game loop
function gameLoop() {
  if (gameOver) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Show the overlay and the retry button
    gameOverlay.style.display = "flex";
    document.getElementById("highestScore").textContent = highestScore;

    return; // Stop the game loop
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw background
  drawBackground();

  // Apply player input and gravity
  handleInput(player);
  applyGravity(player, canvas);

  // Update camera offset to keep the player centered
  const halfCanvasWidth = canvas.width / 2;
  const worldWidth =
    platforms[platforms.length - 1].x + platforms[platforms.length - 1].width;

  offsetX = player.x - halfCanvasWidth;

  // Prevent the camera from going out of bounds
  if (offsetX < 0) {
    offsetX = 0; // Don't let it go past the left edge
  }

  // Apply collision detection with platforms
  platforms.forEach((platform) => checkCollision(player, platform));

  // Check for coin collection and update score
  coins.forEach((coin) => {
    const coinCollected = coin.collect(player);
    score += coinCollected;
  });

  // Monster collision logic for game over
  monsters.forEach((monster) => {
    if (monster.checkCollision(player)) {
      console.log("Monster Collision! Game Over");

      highestScore = Math.max(score, highestScore); // Update the highest score
      gameOver = true; // End the game if a monster is touched
      gameMessageContainer.textContent = `Game Over!`;
      gameOverlay.style.display = "flex"; // Show the game over overlay
      document.getElementById("highestScore").textContent = highestScore;

      // Show the retry button
      retryButton.style.display = "flex";
      sendScore(score, 'MarioGo'); 
    }
  });

  // Check if the player has reached the level goal
  checkLevelGoal();

  // Draw all objects relative to the camera offset and apply scaling
  platforms.forEach((platform) => platform.draw(ctx, offsetX, scaleFactor));
  coins.forEach((coin) => coin.draw(ctx, offsetX, scaleFactor));
  monsters.forEach((monster) => monster.draw(ctx, offsetX, scaleFactor));
  player.draw(ctx, offsetX, scaleFactor);

  // Display score
  ctx.fillStyle = "black";
  ctx.font = `${20 * scaleFactor}px Arial`;
  ctx.fillText(`Score: ${score}`, 20, 30);

  backgroundMusic.play();
  requestAnimationFrame(gameLoop);
}

// Resize canvas and adjust game elements on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Recalculate scale factor based on new width
  scaleFactor = canvas.width / 800;
  resetGame(); // Reset the game when resizing
});

retryButton.addEventListener("click", resetGame);

gameLoop();

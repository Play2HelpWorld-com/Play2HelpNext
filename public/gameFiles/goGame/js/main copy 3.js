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

// Background images
const backgrounds = {
  level1: "./assets/origbig.png", // Level 1 background
  level2: "./assets/night_city.png", // Level 2 background
};
let background = new Image();
background.src = backgrounds.level1; // Initial background for level 1

// Camera offset to follow the player
let offsetX = 0;

// Calculate scale factor based on canvas width and height
let scaleFactor = canvas.width / 800; // Base width of 800px for scaling
const gameOverlay = document.getElementById("gameOverlay");
const retryButton = document.getElementById("retryButton");

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
  score = 0;
  player = new Player(50, 300); // Reset player to initial position
  const mapData = createMap(); // Recreate the map
  platforms = mapData.platforms;
  coins = mapData.coins;
  monsters = mapData.monsters;
  offsetX = 0; // Reset camera offset
  gameOverlay.style.display = "none"; // Hide overlay
  gameLoop(); // Restart the game loop
}

// Check if player has reached the level goal
function checkLevelGoal() {
  if (player.x >= 500) {
    // When the player reaches 30500 on the ground
    highestScore = Math.max(score, highestScore); // Update the highest score
    gameOver = true; // End the game when reaching the goal

    // Transition to the next level
    level++;
    if (level === 2) {
      background.src = backgrounds.level2; // Change background for level 2
    }

    // Show the overlay and the retry button
    gameOverlay.style.display = "flex";
    document.getElementById("highestScore").textContent = highestScore;
  }
}

// Main game loop
function gameLoop() {
  if (gameOver) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Display "Game Over" message
    document.getElementById("highestScore").textContent = highestScore;

    // Show the overlay and the retry button
    gameOverlay.style.display = "flex";

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

  // Check for monster collision
  monsters.forEach((monster) => {
    if (monster.checkCollision(player)) {
      console.log("Monster Collision! Game Over");
      highestScore = Math.max(score, highestScore); // Update the highest score
      gameOver = true; // End the game if a monster is touched
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

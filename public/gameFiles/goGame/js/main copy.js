// main.js

import Player from "./player.js";
import { handleInput } from "./input.js";
import { applyGravity, checkCollision } from "./physics.js";
import { createMap } from "./terrain.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800; // Canvas width
canvas.height = 400; // Canvas height

let player = new Player(50, 300);
let platforms = createMap(); // Generate the beautiful map with createMap()

// Camera offset to follow the player
let offsetX = 0;

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Apply player input and gravity
  handleInput(player);
  applyGravity(player);

  // Update the camera offset to keep the player centered
  offsetX = player.x - canvas.width / 2;

  // Apply collision detection with platforms
  platforms.forEach((platform) => checkCollision(player, platform));

  // Draw all objects relative to the camera offset
  platforms.forEach((platform) => platform.draw(ctx, offsetX));
  player.draw(ctx, offsetX);

  requestAnimationFrame(gameLoop);
}

gameLoop();

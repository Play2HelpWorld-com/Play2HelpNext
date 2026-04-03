export function checkIfOnGround(player, canvas) {
  // Use canvas height to determine the ground level
  const groundLevel = canvas.height;

  if (player.y + player.height >= groundLevel) {
    player.y = groundLevel - player.height; // Set player to the ground level
    player.dy = 0; // Stop downward movement
    player.isOnGround = true; // Mark as on ground
  } else {
    player.isOnGround = false; // The player is still falling or jumping
  }
}

export function applyGravity(player, canvas) {
  const gravity = 0.5;

  if (!player.isOnGround) {
    player.dy += gravity; // Apply gravity if the player is not on the ground
    player.y += player.dy; // Update the player's vertical position
  }

  checkIfOnGround(player, canvas); // Check if the player has hit the ground after applying gravity
}

export function checkCollision(player, platform) {
  const playerBottom = player.y + player.height;
  const playerTop = player.y;
  const playerRight = player.x + player.width;
  const playerLeft = player.x;
  const platformBottom = platform.y + platform.height;
  const platformTop = platform.y;
  const platformRight = platform.x + platform.width;
  const platformLeft = platform.x;

  // Check for each side collision
  if (
    player.x < platform.x + platform.width &&
    player.x + player.width > platform.x &&
    player.y < platform.y + platform.height &&
    player.y + player.height > platform.y
  ) {
    // Top collision (landing on top of the platform)
    if (playerBottom > platformTop && playerTop < platformTop) {
      player.dy = 0; // Stop downward movement
      player.y = platformTop - player.height; // Place player on top of platform
      player.isOnGround = true; // Mark as on ground
    }
    // Bottom collision (hitting the underside of a platform)
    else if (playerTop < platformBottom && playerBottom > platformBottom) {
      player.dy = 0;
      player.y = platformBottom;
    }
    // Left collision (hitting the platform from the left)
    else if (playerRight > platformLeft && playerLeft < platformLeft) {
      player.dx = 0;
      player.x = platformLeft - player.width;
    }
    // Right collision (hitting the platform from the right)
    else if (playerLeft < platformRight && playerRight > platformRight) {
      player.dx = 0;
      player.x = platformRight;
    }
  } else {
    if (player.isOnGround) {
      player.isOnGround = true;
    } else {
      player.isOnGround = false; // Player is no longer on the ground, gravity should apply
    }
  }
}

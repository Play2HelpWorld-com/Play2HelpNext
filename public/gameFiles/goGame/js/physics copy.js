export function applyGravity(player) {
  const gravity = 0.5;

  if (!player.isOnGround) {
    player.dy += gravity;
    player.y += player.dy;
  }

  // Ensure the player does not fall below the floor
  if (player.y + player.height > 400) {
    // Assuming 400 is the ground level
    player.y = 400 - player.height;
    player.dy = 0;
    player.isOnGround = true;
  }
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
    // If player is not colliding from the bottom and bottom, allow them to fall
    if (player.isOnGround && playerBottom <= platformTop) {
      // if player is colliding from the bottom, stop them from falling, let them jump
      if (playerBottom > platformTop && playerTop < platformTop) {
        player.dy = 0;
        player.y = platformTop - player.height;
        player.isOnGround = true;
      } else {
        player.isOnGround = false;
      }
    }
  }
}

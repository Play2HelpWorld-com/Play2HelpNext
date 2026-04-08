// camera.js

export function getCameraOffset(player, canvas) {
  // Calculate the camera offset to keep the player in the center of the screen
  return player.x - canvas.width / 2;
}

export function applyCameraOffset(ctx, offsetX) {
  // Apply camera offset to the drawing context to simulate scrolling
  ctx.setTransform(1, 0, 0, 1, -offsetX, 0);
}

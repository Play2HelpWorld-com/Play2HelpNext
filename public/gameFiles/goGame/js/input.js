const keys = { ArrowLeft: false, ArrowRight: false, Space: false };

// Register event listeners for keyboard
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") keys.ArrowLeft = true;
  if (event.code === "ArrowRight") keys.ArrowRight = true;
  if (event.code === "Space") keys.Space = true;
});

document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowLeft") keys.ArrowLeft = false;
  if (event.code === "ArrowRight") keys.ArrowRight = false;
  if (event.code === "Space") keys.Space = false;
});

// Handle mobile input buttons
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const jumpButton = document.getElementById("jumpButton");

leftButton.addEventListener("touchstart", () => {
  keys.ArrowLeft = true;
});
leftButton.addEventListener("touchend", () => {
  keys.ArrowLeft = false;
});

rightButton.addEventListener("touchstart", () => {
  keys.ArrowRight = true;
});
rightButton.addEventListener("touchend", () => {
  keys.ArrowRight = false;
});

jumpButton.addEventListener("touchstart", () => {
  keys.Space = true;
});
jumpButton.addEventListener("touchend", () => {
  keys.Space = false;
});

// Handle player input (keyboard and mobile controls)
export function handleInput(player) {
  if (keys.ArrowLeft) {
    player.x -= 4;
  }
  if (keys.ArrowRight) {
    player.x += 4;
  }
  if (keys.Space && player.isOnGround) {
    player.jump();
  }

  if (player.x < 0) {
    player.x = 0;
  }
}

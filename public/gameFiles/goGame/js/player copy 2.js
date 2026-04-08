export default class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.dy = 0;
    this.jumpStrength = -12;
    this.isOnGround = false;

    // Player color if sprite is unavailable
    this.color = "red";

    // Load the sprite sheet
    this.spriteSheet = new Image();
    this.spriteSheet.src = "./assets/run.png"; // Path to your sprite sheet image

    // Animation properties
    this.frameIndex = 0; // Current frame in animation
    this.frameSpeed = 12; // Speed of frame change (higher = slower animation)
    this.tickCount = 0; // Ticks to control the frame rate
    this.frames = 6; // Total number of frames in the animation
    this.frameWidth = 42; // Width of each frame in the sprite sheet
    this.frameHeight = 42; // Height of each frame in the sprite sheet
  }

  jump() {
    if (this.isOnGround) {
      this.dy = this.jumpStrength;
      this.isOnGround = false;
    }
  }

  updateAnimation() {
    this.tickCount++;
    if (this.tickCount > this.frameSpeed) {
      this.tickCount = 0;
      // Cycle through frames
      this.frameIndex = (this.frameIndex + 1) % this.frames;
    }
  }

  draw(ctx, offsetX) {
    this.updateAnimation();

    if (this.spriteSheet.complete) {
      // Draw the current frame from the sprite sheet
      ctx.drawImage(
        this.spriteSheet,
        this.frameIndex * this.frameWidth,
        0, // Source x and y on sprite sheet
        this.frameWidth,
        this.frameHeight, // Source width and height
        this.x - offsetX,
        this.y, // Destination x and y on canvas
        this.frameWidth, // Make the player twice the size of the original
        this.frameHeight // Make the player twice the size of the original
      );
    } else {
      // Fallback: draw a simple rectangle if sprite is not loaded
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x - offsetX, this.y, this.width, this.height);
    }
  }
}

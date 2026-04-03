export default class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.color = "red"; // This is kept for fallback if image fails
    this.dy = 0;
    this.jumpStrength = -12;
    this.isOnGround = false;

    // Load the image (replace with the correct image path)
    this.sprite = new Image();
    this.sprite.src = "./assets/mario.png"; // Path to your player image
  }

  jump() {
    if (this.isOnGround) {
      this.dy = this.jumpStrength;
      this.isOnGround = false;
    }
  }

  draw(ctx, offsetX) {
    // Draw the image once it is loaded
    if (this.sprite.complete) {
      ctx.drawImage(
        this.sprite,
        this.x - offsetX, // X position on canvas
        this.y, // Y position on canvas
        this.width, // Width of the image (resize if necessary)
        this.height // Height of the image (resize if necessary)
      );
    } else {
      // Fallback: Draw a red rectangle if image is not loaded
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x - offsetX, this.y, this.width, this.height);
    }
  }
}

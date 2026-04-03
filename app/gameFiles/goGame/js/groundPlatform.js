export default class GroundPlatform {
  constructor(width, height, yPosition) {
    this.x = 0; // The ground platform will start at x = 0
    this.y = yPosition || 350; // Set y-position of the ground (adjust as needed)
    this.width = width; // Width of the ground platform
    this.height = height; // Height of the ground platform (thickness)
    this.color = "brown"; // Color of the ground platform
  }

  // Draw the ground platform on the canvas
  draw(ctx, offsetX) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x - offsetX, this.y, this.width, this.height); // Draw relative to the camera offset
  }
}

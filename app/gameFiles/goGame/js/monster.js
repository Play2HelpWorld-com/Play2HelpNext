export default class Monster {
  constructor(x, y, texturePath) {
    this.x = x;
    this.y = y;
    this.width = 30; // Monster width
    this.height = 50; // Monster height
    this.active = true; // Monster is active until player collides

    // Load the texture
    this.image = new Image();
    this.image.src = texturePath;

    this.sound = new Audio("./assets/bomb-explosion.mp3");

    this.imageLoaded = false;
    this.image.onload = () => {
      this.imageLoaded = true; // Mark image as loaded
    };
  }

  draw(ctx, offsetX) {
    if (this.active) {
      if (this.imageLoaded) {
        // Draw the image if loaded
        ctx.drawImage(
          this.image,
          this.x - offsetX,
          this.y - this.height,
          this.width,
          this.height
        );
      } else {
        // Fallback to a colored rectangle while the image loads
        ctx.fillStyle = "red";
        ctx.fillRect(
          this.x - offsetX,
          this.y - this.height,
          this.width,
          this.height
        );
      }
    }
  }

  checkCollision(player) {
    if (
      this.active &&
      player.x < this.x + this.width &&
      player.x + player.width > this.x &&
      player.y < this.y &&
      player.y + player.height > this.y - this.height
    ) {
      this.active = false; // Monster is deactivated upon collision
      this.sound.play();
      return true; // Collision detected
    }
    return false; // No collision
  }
}

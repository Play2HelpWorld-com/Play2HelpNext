export default class Platform {
  constructor(x, y, width, height, imageSrc = null) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = null;

    // Load and create a pattern from the image
    if (imageSrc) {
      this.image = new Image();
      this.image.src = imageSrc;
      this.pattern = null;
      this.image.onload = () => {
        const tempCanvas = document.createElement("canvas");
        const tempCtx = tempCanvas.getContext("2d");
        this.pattern = tempCtx.createPattern(this.image, "repeat");
      };
    }
  }

  // Draw the platform with a fixed repeating pattern
  draw(ctx, offsetX) {
    if (this.pattern) {
      // Save the current context state
      ctx.save();

      // Translate context to ensure pattern stays fixed within platform bounds
      ctx.translate(this.x - offsetX, this.y);
      ctx.fillStyle = this.pattern;
      ctx.fillRect(0, 0, this.width, this.height);

      // Restore the context state
      ctx.restore();
    } else {
      // Fallback color if pattern isn't ready
      ctx.fillStyle = "brown";
      ctx.fillRect(this.x - offsetX, this.y, this.width, this.height);
    }
  }
}

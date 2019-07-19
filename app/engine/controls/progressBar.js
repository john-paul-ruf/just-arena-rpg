class ProgressBar extends Drawable {
  constructor(container, max) {
    super();
    this.container = container;

    this.current = max;
    this.max = max;

    this.progressColor = undefined;
  }

  draw() {
    if (this.visible) {
      super.draw();
      const currentColor = this.width * (this.current / this.max);
      fill(this.progressColor);
      rect(this.relativeX, this.relativeY, currentColor < 0 ? 0 : currentColor, this.height);
    }
  }
}
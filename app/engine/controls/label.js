class Label extends Drawable{
  constructor(container) {
    super();

    this.textSize = 14;

    this.text = '';
    this.textColor = undefined;

    this.container = container;
    this.alignment = 'left';
  }

  draw() {
    if (this.visible) {
      if (this.textColor) {
        fill(this.textColor);
      }
      textSize(this.textSize);

      switch (this.alignment.toLocaleLowerCase()) {
        case 'left':
          textAlign(LEFT, CENTER);
          break;
        case 'right':
          textAlign(RIGHT, CENTER);
          break;
        case 'center':
          textAlign(CENTER, CENTER);
          break;
      }

      text(this.text, this.relativeX, this.relativeY, this.width, this.height);

      this.onMouseEnter();
      this.onMouseLeave();
    }
  }
}
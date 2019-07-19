class Button extends Clickable {
  constructor(container) {
    super();
    
    this.textSize = 14;
   
    this.text = '';
    this.textColor = undefined;

    this.container = container;
  }

  draw() {
    if (this.visible) {
      super.draw();
      if (this.textColor) {
        fill(this.textColor);
      }
      textSize(this.textSize);
      textAlign(CENTER, CENTER);

      text(this.text, this.relativeX, this.relativeY, this.width, this.height);
    }
  }
}
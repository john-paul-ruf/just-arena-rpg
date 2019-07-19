class Drawable {
  constructor() {
    this.mouseOverhandlers = [];
    this.x = 0;
    this.y = 0;
    this.height = 100;
    this.width = 100;
    this.borderWidth = 0;
    this.rounding = 0;
    this.dropShadow = false;
    this.dropShadowOffset = 5;
    this.color = undefined;
    this.borderColor = undefined;
    this.visible = true;
  }

  draw() {
    if (this.visible) {

      if (this.dropShadow) {
        fill(color(0, 0, 0, 128));
        rect(this.relativeX + this.dropShadowOffset, this.relativeY + this.dropShadowOffset, this.width, this.height, this.rounding);
      }

      fill(this.color);

      strokeWeight(this.borderWidth);
      if (this.borderColor) {
        stroke(this.borderColor);
      }

      rect(this.relativeX, this.relativeY, this.width, this.height, this.rounding);
      strokeWeight(0);

      this.onMouseOver();
    }
  }

  get relativeX() {
    return this.container ? this.container.relativeX + this.x : this.x;
  }

  get relativeY() {
    return this.container ? this.container.relativeY + this.y : this.y;
  }

  mouseOver() {
    if (mouseX > this.relativeX && mouseX < this.relativeX + this.width
      && mouseY > this.relativeY && mouseY < this.relativeY + this.height) {
      return true;
    }
    return false;
  };

  subscribeMouseOver(fn) {
    this.mouseOverhandlers.push(fn);
  };

  unsubscribeMouseOver(fn) {
    this.mouseOverhandlers = this.handlers.filter(
      function (item) {
        if (item !== fn) {
          return item;
        }
      }
    );
  };

  onMouseOver() {

    this.mouseOverhandlers.forEach((item) => {
      if (this.mouseOver()) {
        item.call(this);
      }
    });
  };
};
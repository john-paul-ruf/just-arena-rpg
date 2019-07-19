class Drawable {
  constructor() {
    this.mouseEnterHandlers = [];
    this.mouseLeaveHandlers = [];
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

      this.onMouseEnter();
      this.onMouseLeave();
    }
  }

  get relativeX() {
    return this.container ? this.container.relativeX + this.x : this.x;
  }

  get relativeY() {
    return this.container ? this.container.relativeY + this.y : this.y;
  }

  mouseEnter() {
    if (mouseX > this.relativeX && mouseX < this.relativeX + this.width
      && mouseY > this.relativeY && mouseY < this.relativeY + this.height) {
      return true;
    }
    return false;
  }

  subscribeMouseEnter(fn) {
    this.mouseEnterHandlers.push(fn);
  }

  unsubscribeMouseEnter(fn) {
    this.mouseEnterHandlers = this.handlers.filter(
      function (item) {
        if (item !== fn) {
          return item;
        }
      }
    );
  }

  onMouseEnter() {

    this.mouseEnterHandlers.forEach((item) => {
      if (this.mouseEnter()) {
        item.call(this);
      }
    });
  }

  mouseLeave() {
    if (mouseX > this.relativeX && mouseX < this.relativeX + this.width
      && mouseY > this.relativeY && mouseY < this.relativeY + this.height) {
      return false;
    }
    return true;
  }

  subscribeMouseLeave(fn) {
    this.mouseLeaveHandlers.push(fn);
  }

  unsubscribeMouseLeave(fn) {
    this.mouseLeaveHandlers = this.handlers.filter(
      function (item) {
        if (item !== fn) {
          return item;
        }
      }
    );
  }

  onMouseLeave() {
    this.mouseLeaveHandlers.forEach((item) => {
      if (this.mouseLeave()) {
        item.call(this);
      }
    });
  }
};
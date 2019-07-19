class Clickable extends Drawable {
  constructor() {
    super();
    this.clickHandlers = [];
  }

  clicked() {
    if (mouseX > this.relativeX && mouseX < this.relativeX + this.width
      && mouseY > this.relativeY && mouseY < this.relativeY + this.height) {
      return true;
    }
    return false;
  };

  subscribe(fn) {
    this.clickHandlers.push(fn);
  };

  unsubscribe(fn) {
    this.clickHandlers = this.handlers.filter(
      function (item) {
        if (item !== fn) {
          return item;
        }
      }
    );
  };

  onClick() {

    this.clickHandlers.forEach((item) => {
      if (this.clicked() && this.visible) {
        item.call(this);
      }
    });
  };
};

class Interactive extends Drawable {
  constructor() {
    super();
    this.eventHandlers = [];
  }

  subscribe(fn) {
    this.eventHandlers.push(fn);
  };

  unsubscribe(fn) {
    this.eventHandlers = this.eventHandlers.filter(
      function (item) {
        if (item !== fn) {
          return item;
        }
      }
    );
  };

  onClick() {
    this.eventHandlers.forEach((item) => {
        item.call(this);
    });
  };
};

class Sprite extends Interactive {
  constructor(imageKey) {
    super();

    this.sprite = loadImage(imageKey);
  }

  draw() {
    if (this.visible) {
      image(this.sprite, this.x, this.y);
    }
  }
}
class AnimatedSprite extends Sprite {
  constructor(imageKeyArray) {
    super(imageKeyArray[0]);
    this.imageKeys = imageKeyArray;
    this.sprites = [];

    _.forEach(this.imageKeys, k => {
      this.sprites.push(loadImage(k));
    });

    this.imageIndex = 0;
    this.animationSpeed = 5;
    this.ticker = 0;
  }

  draw() {
    if (this.visible) {
      image(this.sprite, this.x, this.y);

      this.ticker++;
      if (this.ticker > 100) {
        this.ticker = 0;
      }

      if (this.ticker % this.animationSpeed === 0) {
        this.imageIndex++;

        if (this.imageIndex >= this.imageKeys.length) {
          this.imageIndex = 0;
        }

        this.sprite = this.sprites[this.imageIndex];
      }
    }
  }
}
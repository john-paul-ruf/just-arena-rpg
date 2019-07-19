class MathHelper {
  constructor() {

  }
}

MathHelper.findLength = (x, y) => {
  return Math.sqrt(x * x + y * y);
};

MathHelper.direction = (position) => {
  return new Victor(position.x / MathHelper.findLength(position.x, position.y), position.y / MathHelper.findLength(position.x, position.y)).normalize();
};
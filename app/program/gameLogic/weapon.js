class Weapon {
  constructor(name, min, max, stat) {
    this.name = name;
    this.minDamage = min;
    this.maxDamage = max;
    this.stat = stat;
    this.modifications = [];
  }

  getDamage() {
    const die = new Dice(this.maxDamage);
    const dmgRoll = die.roll();
    return dmgRoll < min ? min : dmgRoll;
  }
};
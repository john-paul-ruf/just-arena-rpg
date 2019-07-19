class Villain extends Player {
  constructor() {
    super();
    this.availablePoints = window.program.initalPoints;
  }

  init() {
    this.weapon = LootGenerator.generateWeapon();

    this.die = new Dice(4);
    while (this.availablePoints > 0) {
      this.randoAssignPoints();
    }

    this.currentHP = this.HP;
  }

  randoAssignPoints() {
    if (this.availablePoints > 0) {
      switch (this.die.roll()) {
        case 1:
          this.addPoint('STR');
          break;
        case 2:
          this.addPoint('DEX');
          break;
        case 3:
          this.addPoint('INT');
          break;
        case 4:
          this.addPoint('HP');
          break;
      }
    }
  };
};
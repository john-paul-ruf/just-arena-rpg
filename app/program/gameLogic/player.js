class Player extends NPC {
  constructor() {
    super();
  }

  init() {
    this.availablePoints = window.program.initalPoints;
    this.fightsSurvived = 0;
    this.weapon = LootGenerator.generateWeapon();
  }

  addPoint(attribute) {
    if (this.availablePoints > 0) {
      switch (attribute.toUpperCase()) {
        case 'STR':
          this.STR++;
          break;
        case 'DEX':
          this.DEX++;
          break;
        case 'INT':
          this.INT++;
          break;
        case 'HP':
          this.HP++;
          break;
      }

      this.availablePoints--;
    }
  }

  subtractPoint(attribute) {
      switch (attribute.toUpperCase()) {
        case 'STR':
          if (this.STR > 7) {
            this.STR--;
            this.availablePoints++;
          }
          break;
        case 'DEX':
          if (this.DEX > 7) {
            this.DEX--;
            this.availablePoints++;
          }
          break;
        case 'INT':
          if (this.INT > 7) {
            this.INT--;
            this.availablePoints++;
          }
          break;
        case 'HP':
          if (this.HP > 7) {
            this.HP--;
            this.availablePoints++;
          }
          break;
      }
  }
}
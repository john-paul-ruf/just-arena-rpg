class NPC {
  constructor() {
    this.STR = 7;
    this.DEX = 7;
    this.INT = 7;
    this.HP = 7;
    this.currentHP = this.HP;
    this.weapon = undefined;
  }

  attack(npc) {

    
    switch (this.weapon.stat) {
      case 'STR':
        npc.currentHP -= this.getDamage(this.STR, npc);
        break;
      case 'DEX':
        npc.currentHP -= this.getDamage(this.DEX, npc);
        break;

      case 'INT':
        npc.currentHP -= this.getDamage(this.INT, npc);
        break;
      default:
        npc.currentHP -= this.getDamage(_.max([this.STR, this.INT, this.DEX]), npc);
        break;

    }
  }

  getDamage(statValue, npc) {
    const d20 = new Dice(20);
    let damage = 0;
    const hitRoll = d20.roll();
    if (hitRoll + statValue / 2 > npc.DEX) {
      damage = damage + this.weapon.getDamage();
    }

    return hitRoll === 20 ? damage * 2 : damage;
  };

};
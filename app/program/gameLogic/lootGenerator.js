class LootGenerator {
  constructor() {
  }

  static enhanceWeapon(weapon, modificationArray) {
    _.forEach(modificationArray, m => {
      switch (m.stat) {
        case 'STR':
          if (!weapon.name.includes('Sharp')) {
            weapon.name = 'Sharp '.concat(weapon.name);
          }
          weapon.modifications.push(m);
          break;
        case 'DEX':
          if (!weapon.name.includes('Swift')) {
            weapon.name = 'Swift '.concat(weapon.name);
          }
          weapon.modifications.push(m);
          break;
        case 'INT':
          if (!weapon.name.includes('Shiny')) {
            weapon.name = 'Shiny '.concat(weapon.name);
          }
          weapon.modifications.push(m);
          break;
      }
    });
  }

  static generateWeapon() {

    const d20 = new Dice(20);

    let returnWeapon;

    switch (d20.roll()) {
      case 1:
      case 2:
      case 3:
        returnWeapon = new Weapon('Dagger', 1, 2, 'STR');
        break;

      case 4:
      case 5:
      case 6:
        returnWeapon = new Weapon('Sword', 1, 4, 'STR');
        break;

      case 7:
      case 8:
      case 9:
        returnWeapon = new Weapon('Axe', 2, 3, 'STR');
        break;

      case 10:
      case 11:
      case 12:
        returnWeapon = new Weapon('Wand', 1, 2, 'INT');
        break;

      case 13:
      case 14:
      case 15:
        returnWeapon = new Weapon('Glyph', 1, 4, 'INT');
        break;

      case 16:
      case 17:
      case 18:
        returnWeapon = new Weapon('Staff', 2, 3, 'INT');
        break;

      case 19:
      case 20:
        returnWeapon = new Weapon('Dual Blades', 1, 6, 'DEX');
        break;
    }

    switch (d20.roll()) {
      case 15:
      case 16:
      case 17:
        LootGenerator.enhanceWeapon(returnWeapon, [WeaponModification.generateWeaponModification()]);
        break;

      case 18:
      case 19:
        LootGenerator.enhanceWeapon(returnWeapon, [WeaponModification.generateWeaponModification(),
          WeaponModification.generateWeaponModification()]);
        break;

      case 20:
        LootGenerator.enhanceWeapon(returnWeapon, [WeaponModification.generateWeaponModification(),
          WeaponModification.generateWeaponModification(),
          WeaponModification.generateWeaponModification()]);
        break;
    }

    return returnWeapon;

  }
};
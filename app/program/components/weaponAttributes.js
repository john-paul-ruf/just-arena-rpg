class WeaponAttributes extends Container {
  constructor(owner, targetWeapon) {
    super(owner);
    this.targetWeapon = targetWeapon;
  }

  init() {
    this.color = window.program.menuBackground;
    this.textColor = window.program.menuText;
    this.y = 10;
    this.x = 10;
    this.width = 100;
    this.height = 100;
    this.rounding = 0;
    this.borderWidth = 0;
    this.dropShadow = false;

    this.lblStat = new Label(this);
    this.lblStat.textColor = window.program.menuText;
    this.lblStat.y = 5;
    this.lblStat.x = 5;
    this.lblStat.width = 100;
    this.lblStat.height = 15;
    this.lblStat.text = `Main Stat: ${this.targetWeapon.stat}`;
    this.lblStat.textSize = 12;
    this.lblStat.alignment = 'Left';

    this.lblDamage = new Label(this);
    this.lblDamage.textColor = window.program.menuText;
    this.lblDamage.y = 25;
    this.lblDamage.x = 5;
    this.lblDamage.width = 100;
    this.lblDamage.height = 15;
    this.lblDamage.text = `Min: ${this.targetWeapon.minDamage} Max: ${this.targetWeapon.maxDamage}`;
    this.lblDamage.textSize = 12;
    this.lblDamage.alignment = 'Left';

    this.drawables.push(this.lblStat);
    this.drawables.push(this.lblDamage);

    let i = 1;
    _.forEach(this.targetWeapon.modifications, m => {
      let lbl = new Label(this);
      lbl.y = 25 + i * 20;
      lbl.x = 5;
      lbl.width = 100;
      lbl.height = 15;
      lbl.text = `Stat: ${m.stat} Mod: ${m.bonus}`;
      lbl.textSize = 8;
      lbl.alignment = 'Left';

      this.drawables.push(lbl);

      i++;
    });
  }

  updateText() {
    this.lblStat.text = `Stat: ${this.targetWeapon.stat}`;
    this.lblDamage.text = `Min: ${this.targetWeapon.minDamage} Max: ${this.targetWeapon.maxDamage}`;
  }

  draw() {
    if (this.visible) {
      super.draw();
      this.updateText();
    }
  }
}
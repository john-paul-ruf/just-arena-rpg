class FighterPanel extends Container {
  constructor(owner, target) {
    super(owner);
    this.target = target;
  }

  init() {
    this.drawables.length = 0;

    this.color = window.program.menuBackground;
    this.width = 125;
    this.height = 180;
    this.borderWidth = 0;
    this.rounding = 0;
    this.visible = true;
    this.dropShadow = false;

    this.attributes = new MiniAttributes(this, this.target);
    this.attributes.init();
    this.attributes.visible = false;

    this.portrait = new Button(this);
    this.portrait.textColor = window.program.menuText;
    this.portrait.color = window.program.menuBackground;
    this.portrait.y = 10;
    this.portrait.x = 10;
    this.portrait.width = 100;
    this.portrait.height = 100;
    this.portrait.text = this.target instanceof Villain ? "Villain" : 'Player';
    this.portrait.rounding = 0;
    this.portrait.borderColor = color(0, 0, 0);
    this.portrait.borderWidth = 1;
    this.portrait.dropShadow = false;

    this.portrait.subscribeMouseEnter(() => {
      this.attributes.visible = true;
    });

    this.portrait.subscribeMouseLeave(() => {
      this.attributes.visible = false;
    });

    this.health = new ProgressBar(this, this.target.HP);
    this.health.color = color(128, 128, 128);
    this.health.y = 120;
    this.health.x = 10;
    this.health.width = 100;
    this.health.height = 10;
    this.health.progressColor = color(256, 0, 0);
    this.health.rounding = 0;
    this.health.borderColor = color(0, 0, 0);
    this.health.borderWidth = 1;
    this.health.dropShadow = false;

    this.weapon = new Label(this);
    this.weapon.textColor = window.program.menuText;
    this.weapon.y = 140;
    this.weapon.x = 10;
    this.weapon.width = 125;
    this.weapon.height = 30;
    this.weapon.text = this.target.weapon.name;
    this.weapon.textSize = 12;
    this.weapon.alignment = 'left';

    this.weaponAttributes = new WeaponAttributes(this, this.target.weapon);
    this.weaponAttributes.init();
    this.weaponAttributes.visible = false;

    this.weapon.subscribeMouseEnter(() => {
      this.weaponAttributes.visible = true;
    });

    this.weapon.subscribeMouseLeave(() => {
      this.weaponAttributes.visible = false;
    });

    this.drawables.push(this.portrait);
    this.drawables.push(this.health);
    this.drawables.push(this.weapon);
    this.drawables.push(this.attributes);
    this.drawables.push(this.weaponAttributes);
  }

  updateText() {
    this.init();
  }

}
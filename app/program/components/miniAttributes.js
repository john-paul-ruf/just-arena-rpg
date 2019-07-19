class MiniAttributes extends Container {
  constructor(owner) {
    super(owner);
  }

  init() {
    this.color = Config.menuBackground;
    this.textColor = Config.menuText;
    this.y = 10;
    this.x = 10;
    this.width = 100;
    this.height = 100;
    this.rounding = 0;
    this.borderWidth = 0;
    this.dropShadow = false;

    this.lblStr = new Label(this);
    this.lblStr.textColor = Config.menuText;
    this.lblStr.y = 5;
    this.lblStr.x = 5;
    this.lblStr.width = 100;
    this.lblStr.height = 15;
    this.lblStr.text = `STR: ${ArenaRPG.player.STR}`;
    this.lblStr.textSize = 14;
    this.lblStr.alignment = 'center';

    this.lblDex = new Label(this);
    this.lblDex.textColor = Config.menuText;
    this.lblDex.y = 25;
    this.lblDex.x = 5;
    this.lblDex.width = 100;
    this.lblDex.height = 15;
    this.lblDex.text = `DEX: ${ArenaRPG.player.DEX}`;
    this.lblDex.textSize = 14;
    this.lblDex.alignment = 'center';

    this.lblInt = new Label(this);
    this.lblInt.textColor = Config.menuText;
    this.lblInt.y = 50;
    this.lblInt.x = 5;
    this.lblInt.width = 100;
    this.lblInt.height = 15;
    this.lblInt.text = `INT: ${ArenaRPG.player.INT}`;
    this.lblInt.textSize = 14;
    this.lblInt.alignment = 'center';

    this.lblHealth = new Label(this);
    this.lblHealth.textColor = Config.menuText;
    this.lblHealth.y = 75;
    this.lblHealth.x = 5;
    this.lblHealth.width = 100;
    this.lblHealth.height = 15;
    this.lblHealth.text = `HP: ${ArenaRPG.player.HP}`;
    this.lblHealth.textSize = 14;
    this.lblHealth.alignment = 'center';

    this.drawables.push(this.lblStr);
    this.drawables.push(this.lblDex);
    this.drawables.push(this.lblInt);
    this.drawables.push(this.lblHealth);

    
  }

  updateText() {
    this.lblStr.text = `STR: ${ArenaRPG.player.STR}`;
    this.lblDex.text = `DEX: ${ArenaRPG.player.DEX}`;
    this.lblInt.text = `INT: ${ArenaRPG.player.INT}`;
    this.lblHealth.text = `HP: ${ArenaRPG.player.HP}`;
  }

  draw() {
    if (this.visible) {
      super.draw();
      this.updateText();
    }
  }
}
class ArenaRPG {
  constructor() {
    
  }

  setup() {
    this.canvas = createCanvas(window.innerWidth, window.innerHeight);
  }

  draw() {
    background(96);
    this.mainMenu.draw();
    this.characterBuilder.draw();
    this.fightMenu.draw();
  }

  mouseClick() {
    this.mainMenu.onClick();
    this.characterBuilder.onClick();
    this.fightMenu.onClick();
  }

  init() {

    Config.menuText = color(0, 0, 0);
    Config.menuBorders = color(0, 256, 0);
    Config.menuBackground = color(128, 128, 128);

    Config.buttonBorders = color(0, 256, 0);
    Config.buttonBackground = color(128, 128, 128);
    Config.buttonText = color(0, 0, 0);

    Config.attackButtonBorder = color(256, 0, 0);
    Config.attackButtonBackground = color(128, 128, 128);

    Config.attributePlusButtonBorder = color(256, 0, 0);
    Config.attributePlusButtonBackground = color(128, 128, 128);

    Config.attributeMinusButtonBorder = color(0, 0, 256);
    Config.attributeMinusButtonBackground = color(128, 128, 128);



    this.mainMenu = new MainMenu(this);
    this.mainMenu.init();

    this.characterBuilder = new CharacterBuilderMenu(this);
    this.characterBuilder.init();

    this.fightMenu = new FightMenu(this);
    this.fightMenu.init();

    var center = function (obj) {
      const x = (innerWidth - obj.width) / 2;
      const y = (innerHeight - obj.height) / 2;
      obj.x = x;
    };

    center(this.mainMenu);
    center(this.characterBuilder);
    center(this.fightMenu);

  }
}

ArenaRPG.initalPoints = 10;

ArenaRPG.player = new Player();
ArenaRPG.player.init();

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
    window.program = this;

    this.menuText = color(0, 0, 0);
    this.menuBorders = color(0, 256, 0);
    this.menuBackground = color(128, 128, 128);

    this.buttonBorders = color(0, 256, 0);
    this.buttonBackground = color(128, 128, 128);
    this.buttonText = color(0, 0, 0);

    this.attackButtonBorder = color(256, 0, 0);
    this.attackButtonBackground = color(128, 128, 128);

    this.attributePlusButtonBorder = color(256, 0, 0);
    this.attributePlusButtonBackground = color(128, 128, 128);

    this.attributeMinusButtonBorder = color(0, 0, 256);
    this.attributeMinusButtonBackground = color(128, 128, 128);

    this.initalPoints = 10;

    this.player = new Player();
    this.player.init();

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

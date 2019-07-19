class MainMenu extends Container {
  constructor(owner) {
    super(owner);
  }

  init() {

    this.color = window.program.menuBackground;
    this.x = 50;
    this.y = 50;
    this.width = 400;
    this.height = 400;
    this.borderWidth = 3;
    this.borderColor = window.program.menuBorders;
    this.rounding = 10;
    this.dropShadow = true;

    this.lblHeader = new Label(this);
    this.lblHeader.textColor = window.program.menuText;
    this.lblHeader.y = 20;
    this.lblHeader.x = 0;
    this.lblHeader.width = 400;
    this.lblHeader.height = 50;
    this.lblHeader.text = "Arena RPG";
    this.lblHeader.textSize = 26;
    this.lblHeader.alignment = 'center';

    this.btnCreateCharacter = new Button(this);
    this.btnCreateCharacter.textColor = window.program.buttonText;
    this.btnCreateCharacter.color = window.program.buttonBackground;
    this.btnCreateCharacter.y = 100;
    this.btnCreateCharacter.x = 100;
    this.btnCreateCharacter.width = 200;
    this.btnCreateCharacter.height = 50;
    this.btnCreateCharacter.text = "Create Character";
    this.btnCreateCharacter.rounding = 10;
    this.btnCreateCharacter.borderColor = window.program.buttonBorders;
    this.btnCreateCharacter.borderWidth = 1;
    this.btnCreateCharacter.dropShadow = true;

    this.lblAbout = new Label(this);
    this.lblAbout.textColor = window.program.menuText;
    this.lblAbout.y = 80; //text is positioned strangely
    this.lblAbout.x = 0;
    this.lblAbout.width = 400;
    this.lblAbout.height = 260;
    this.lblAbout.text = "Enter the Arena \n\n" +
      "Win the battle \n\n" +
      "Take the weapon or leave it \n\n" +
      "Battle on";
    this.lblAbout.textSize = 16;
    this.lblAbout.alignment = 'center';

    this.drawables.push(this.lblHeader);
    this.drawables.push(this.btnCreateCharacter);
    this.drawables.push(this.lblAbout);

    this.clickables.push(this.btnCreateCharacter);

    this.characterTransition = function () {
      var that = this;
      var inAction = function () {
        if (that.container.y < 510) {
          that.container.owner.characterBuilder.y += 20;
          that.container.owner.mainMenu.y += 20;
          that.container.owner.fightMenu.y += 20;
          setTimeout(inAction, 50);
        }
      };

      setTimeout(inAction, 50);
    };

    this.btnCreateCharacter.subscribe(this.characterTransition);

  }
}
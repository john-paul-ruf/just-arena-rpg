this.arenaRPG = new ArenaRPG();

let engineFont;
function preload() {
  engineFont = loadFont('app/engine/assets/Pixel-Miners.otf');
}


function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  this.app.init();
}


function setup() {
  this.arenaRPG.init();
  this.arenaRPG.setup();
}

function draw() {
  textFont(engineFont);
  this.arenaRPG.draw();
}

function mousePressed(event) {
  this.arenaRPG.mouseClick(event);
  return false;
}



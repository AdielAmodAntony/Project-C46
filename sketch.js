var bg, bgImg;
var penguin, penguinImg;
var iceberg1, iceberg2, iceberg1Img, iceberg2Img;
var gameState = "start";
var invisibleGround;

function preload () {
  bgImg = loadImage ("images/background.png");
  penguinImg = loadImage ("images/penguin.png");
  iceberg1Img = loadImage ("images/iceberg1.png");
  iceberg2Img = loadImage ("images/iceberg2.png");
}

function setup() {
  createCanvas(1000,700);
  
  bg = createSprite(500, 350);
  bg.addImage (bgImg);
  bg.scale = 3;
  bg.velocityX = -1;

  penguin = createSprite (100, 350);
  penguin.addImage (penguinImg);
  penguin.scale = 0.3;
  penguin.velocityY = 0;

  invisibleGround = createSprite (500, 640, 1000, 10);
  invisibleGround.visible = false                       ;
}

function draw() {
  background(255, 255, 255);
  
  if (bg.x < 0) {
  bg.x = 500;
  }

  if (keyDown ("space") && gameState === "start") {
    gameState = "play";
  }

  if (gameState === "play"){
    penguin.collide (invisibleGround);
    penguin.velocityY = 4;
    if (keyDown ("space")) {
    penguin.velocityY = -10;
  }

  spawnIceberg1 ();
  spawnIceberg2 ();
}
  drawSprites();
}

function spawnIceberg1 () {
  if (frameCount % 100 === 0) {
  iceberg1 = createSprite (1000, 650);
  iceberg1.addImage (iceberg1Img);
  iceberg1.velocityX = -5; 
  }
}

function spawnIceberg2 () {
  if (frameCount % 100 === 0) {
  iceberg2 = createSprite (1000, 50);
  iceberg2.addImage (iceberg2Img);
  iceberg2.velocityX = -5;
  iceberg2.width = 30
  }
}
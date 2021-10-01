var mainPlayer, mainPlayerImg;
var parkImg;
var stormCloud, stormCloudImg;
var redBin, redBinImg, yellowBin, yellowBinImg, greenBin, greenBinImg;
var blueBin, blueBinImg, grayBin, grayBinImg;

var appleImg, bananaImg, deadLeavesImg;
var cardboardBoxImg, eggCartonImg, milkImg, newspaperImg;
var foilImg, foodCanImg, sodaCanImg;
var glassBottleImg, glassShardImg;
var soloImg;
var trashGroup;

var score = 0;
var gameState = 0;

function preload() {
  mainPlayerImg = loadImage("Trash Game Images/trashdude.png");
  parkImg = loadImage("Trash Game Images/park.jpeg");
  stormCloudImg = loadImage("Trash Game Images/stormcloud2.png");

  //bin images
  redBinImg = loadImage("Trash Game Images/redBin.png");
  yellowBinImg = loadImage("Trash Game Images/yellowBin.png");
  greenBinImg = loadImage("Trash Game Images/greenBin.png");
  blueBinImg = loadImage("Trash Game Images/blueBin.png");
  grayBinImg = loadImage("Trash Game Images/grayBin.png");

  //trash images
  appleImg = loadImage("Trash Game Images/apple.png");
  bananaImg = loadImage("Trash Game Images/banana.png");
  deadLeavesImg = loadImage("Trash Game Images/deadleaves.png");
  cardboardBoxImg = loadImage("Trash Game Images/cardboardbox.png");
  eggCartonImg = loadImage("Trash Game Images/eggcarton.png");
  milkImg = loadImage("Trash Game Images/milk.png");
  newspaperImg = loadImage("Trash Game Images/newspaper.png");
  foilImg = loadImage("Trash Game Images/foil.png");
  foodCanImg = loadImage("Trash Game Images/foodcan.png");
  sodaCanImg = loadImage("Trash Game Images/sodacan.png");
  glassBottleImg = loadImage("Trash Game Images/glassbottle.png");
  glassShardImg = loadImage("Trash Game Images/glassshard.png");
  soloImg = loadImage("Trash Game Images/solo.png");
}

function setup() {
  createCanvas(1200,800);
  mainPlayer = createSprite(800, 675, 50, 50);
  mainPlayer.addImage(mainPlayerImg);
  mainPlayer.scale = 0.1;

  stormCloud = createSprite(-100, 100, 50, 50);
  stormCloud.addImage(stormCloudImg);
  stormCloud.scale = 2;

  redBin = createSprite(50, 600, 50, 50);
  redBin.addImage(redBinImg);
  yellowBin = createSprite(130, 600, 50, 50);
  yellowBin.addImage(yellowBinImg);
  greenBin = createSprite(210, 600, 50, 50);
  greenBin.addImage(greenBinImg);
  blueBin = createSprite(290, 600, 50, 50);
  blueBin.addImage(blueBinImg);
  grayBin = createSprite(370, 600, 50, 50);
  grayBin.addImage(grayBinImg);

  trashGroup = createGroup();
}

function draw() {
  background(parkImg); 

  fill("white");
  noStroke();
  fontSize(24);
  text("1", 50, 600);
  text("2", 130, 600);
  text("3", 210, 600);
  text("4", 290, 600);
  text("5", 370, 600);

  //mainPlayer movements
  if(keyDown("left")) {
    mainPlayer.x = mainPlayer.x - 5;
  }
  if(keyDown("right")) {
    mainPlayer.x = mainPlayer.x + 5;
  }

  if(trashGroup.isTouching(mainPlayer)) {
    text("Type trash can number to dispose!", 550, 750);
    if(keyDown("1")) {
      trashGroup[0].positionX = redBin.x;
    } else if(keyDown("2")) {
      trashGroup[0].positionX = yellowBin.x;
    } else if(keyDown("3")) {
      trashGroup[0].positionX = greenBin.x;
    } else if(keyDown("4")) {
      trashGroup[0].positionX = blueBin.x;
    } else if(keyDown("5")) {
      trashGroup[0].positionX = grayBin.x;
    }
    trashGroup[0].positionY = 500;
    trashGroup[0].velocityY = 4;
    trashGroup[0].lifetime = 25;
    score = score + 1;
  }

  spawnTrash(); 
  drawSprites();
}

function spawnTrash(){
  if(World.frameCount%80===0){
    position = Math.round(random(1,2));
    trash = createSprite(400,200,20,20);
    trash.velocityX = 4;
    
    if(position==1)
    {
      trash.x=1200;
      if(trash.velocityX >= 0) {
        trash.velocityX = trash.velocityX + 0.1;
      }
    }
    else
    {
      if(position==2){
      trash.x = 0;
      if(trash.velocityX <= 0) {
        trash.velocityX = trash.velocityX - 0.1;
      }
      }
    }
    
    trash.scale=0.2;
     //trash.debug=true;
     r = Math.round(random(1,13));
    if (r == 1) {
      trash.addImage(appleImg);
    } else if (r == 2) {
      trash.addImage(bananaImg);
      trash.scale = 0.1;
    } else if (r == 3) {
      trash.addImage(deadLeavesImg);
    } else if (r == 4) {
      trash.addImage(cardboardBoxImg);
      trash.scale = 0.1;
    } else if (r == 5) {
      trash.addImage(eggCartonImg);
    } else if (r == 6) {
      trash.addImage(milkImg);
    } else if (r == 7) {
      trash.addImage(newspaperImg);
      trash.scale = 0.1;
    } else if (r == 8) {
      trash.addImage(foilImg);
    } else if (r == 9) {
      trash.addImage(foodCanImg);
      trash.scale = 0.1;
    } else if (r == 10) {
      trash.addImage(sodaCanImg);
      trash.scale = 0.05;
    } else if (r == 11) {
      trash.addImage(glassBottleImg);
    } else if (r == 12) {
      trash.addImage(glassShardImg);
      trash.scale = 0.4;
    } else if (r == 13) {
      trash.addImage(soloImg);
    }
    
    trash.y=Math.round(random(730, 750));
   
    
    trash.setLifetime=500;
    
    trashGroup.add(trash);
  }
}
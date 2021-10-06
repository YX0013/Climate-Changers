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
var trashGroup, binGroup;
var redGroup, yellowGroup, greenGroup, blueGroup, grayGroup;

var bellSound, downSound, winSound, loseSound;

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

  //sounds
  bellSound = loadSound("https://soundcloud.com/soundeffectsforfree/bell-062");
  downSound = loadSound("https://soundcloud.com/soundeffectsforfree/offi-084");
  winSound = loadSound("https://soundcloud.com/royalty-free-music-btm/corporate-motivational-creative-commons-royalty-free-music-upbeat-positive-happy-background");
  loseSound = loadSound("https://soundcloud.com/royalty-free-music-btm/inspirational-upbeat-uplifting-royalty-free-background-music-for-youtube-videos-vlog-stock-promo");
}

function setup() {
  createCanvas(1200,800);

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

  mainPlayer = createSprite(600, 675, 50, 50);
  mainPlayer.addImage(mainPlayerImg);
  mainPlayer.scale = 0.1;

  trashGroup = createGroup();
  binGroup = createGroup();
  binGroup.add(redBin, yellowBin, greenBin, blueBin, grayBin);
  redGroup = createGroup();
  yellowGroup = createGroup();
  greenGroup = createGroup();
  blueGroup = createGroup();
  grayGroup = createGroup();
}

function draw() {
  background(parkImg); 

  fill("white");
  noStroke();

  //mainPlayer movements
  if(keyDown("left")) {
    mainPlayer.x = mainPlayer.x - 5;
  }
  if(keyDown("right")) {
    mainPlayer.x = mainPlayer.x + 5;
  }

//if player touches trash  
//console.log(trashGroup.size())
for (var i=0;i<trashGroup.size();i++){
  if(trashGroup.get(i).isTouching(mainPlayer)){
    //console.log("trash");
    trashGroup.get(i).setVelocity(0,0);
    text("Type trash can number to dispose!", 550, 750);
     if(keyDown("1")) {
       trashGroup.get(i).position = redBin.position;
       //trashGroup.get(i).setVelocity(0,2);
       trashGroup.get(i).scale = trashGroup.get(i).scale / 2;
       if(redGroup.contains(trashGroup.get(i))) {
            trashGroup.get(i).destroy();
            score = score + 2;
            bellSound.play();
          }  else {
            trashGroup.get(i).destroy();
            stormCloud.x += 50;
            score = score - 2;
            downSound.play();
          }
      }
      else if(keyDown("2")) {
       trashGroup.get(i).position = yellowBin.position;
       //trashGroup.get(i).setVelocity(0,2);
       trashGroup.get(i).scale = trashGroup.get(i).scale / 2;
       if(yellowGroup.contains(trashGroup.get(i))) {
        trashGroup.get(i).destroy();
        score = score + 2;
        bellSound.play();
      } else {
        trashGroup.get(i).destroy();
        stormCloud.x += 50;
        score = score - 2;
        downSound.play();
      }
     } else if(keyDown("3")) {
       trashGroup.get(i).position = greenBin.position;
       //trashGroup.get(i).setVelocity(0,2);
       trashGroup.get(i).scale = trashGroup.get(i).scale / 2;
       if(greenGroup.contains(trashGroup.get(i))) {
        trashGroup.get(i).destroy();
        score = score + 2;
        bellSound.play();
      }   else {
        trashGroup.get(i).destroy();
        stormCloud.x += 50;
        score = score - 2;
        downSound.play();
      }
     } else if(keyDown("4")) {
       trashGroup.get(i).position = blueBin.position;
       //trashGroup.get(i).setVelocity(0,2);
       trashGroup.get(i).scale = trashGroup.get(i).scale / 2;
       if(blueGroup.contains(trashGroup.get(i))) {
        trashGroup.get(i).destroy();
        score = score + 2;
        bellSound.play();
      }  else {
        trashGroup.get(i).destroy();
        stormCloud.x += 50;
        score = score - 2;
        downSound.play();
      }
     } else if(keyDown("5")) {
       trashGroup.get(i).position = grayBin.position;
       //trashGroup.get(i).setVelocity(0,2);
       trashGroup.get(i).scale = trashGroup.get(i).scale / 2;
       if(grayGroup.contains(trashGroup.get(i))) {
        trashGroup.get(i).destroy();
        score = score + 2;
        bellSound.play();
      }  else {
        trashGroup.get(i).destroy();
        stormCloud.x += 50;
        score = score - 2;
        downSound.play();
      }
  }
}
}

  spawnTrash(); 

  //adaptation
  if(score === 20) {
    trashGroup.velocityXEach += 1;
  }
  if(score === 40) {
    trashGroup.velocityXEach += 2;
  }
  if(score === 60) {
    trashGroup.velocityXEach += 3;
  }
  if(score === 80) {
    trashGroup.velocityXEach += 4;
  }


  //end
if(score === 100) {
  textSize(50);
  text("You Win!", 500, 400);
  trashGroup.destroyEach();
  binGroup.destroyEach();
  stormCloud.destroy();
  winSound.play();
}
if(stormCloud.x === 1000) {
  fill("red")
  textSize(50);
  text("POLLUTED", 500, 400);
  trashGroup.destroyEach();
  binGroup.destroyEach();
  loseSound.play();
}

  drawSprites();

  textSize(12);
  fill("white");
  text("1", 45, 600);
  text("2", 126, 600);
  text("3", 213, 600);
  text("4", 287, 600);
  text("5", 362, 600);

  textSize(20);
  stroke("black");
  fill("red");
  text("Red = PLASTIC", 1000, 300);
  fill("yellow");
  text("Yellow = PAPER", 1000, 350);
  fill("lightgreen");
  text("Green = ORGANIC", 1000, 400);
  fill("lightblue");
  text("Blue = GLASS", 1000, 450);
  fill("lightgray");
  text("Gray = METAL", 1000, 500);

  noStroke();
  textSize(32);
  text("Score: "+score, 1000, 750);
  fill("red");
  text("Goal: 100", 1000, 700);
}

function spawnTrash(){
  if(World.frameCount%80===0){
    position = Math.round(random(1,2));
    trash = createSprite(400,200,20,20);
    
    if(position==1)
    {
      trash.x=1200;
      trash.velocityX = -4;
      trash.velocityX = trash.velocityX - 0.05;
    }
    else
    {
      if(position==2){
      trash.x = 0;
      trash.velocityX = 4;
      trash.velocityX = trash.velocityX + 0.05;
      }
    }
    
    trash.scale=0.2;
     //assign an image and trash category
     r = Math.round(random(1,13));
    if (r == 1) {
      trash.addImage(appleImg);
      greenGroup.add(trash);
    } else if (r == 2) {
      trash.addImage(bananaImg);
      trash.scale = 0.1;
      greenGroup.add(trash);
    } else if (r == 3) {
      trash.addImage(deadLeavesImg);
      greenGroup.add(trash);
    } else if (r == 4) {
      trash.addImage(cardboardBoxImg);
      trash.scale = 0.1;
      yellowGroup.add(trash);
    } else if (r == 5) {
      trash.addImage(eggCartonImg);
      yellowGroup.add(trash);
    } else if (r == 6) {
      trash.addImage(milkImg);
      yellowGroup.add(trash);
    } else if (r == 7) {
      trash.addImage(newspaperImg);
      yellowGroup.add(trash);
      trash.scale = 0.05;
    } else if (r == 8) {
      trash.addImage(foilImg);
      grayGroup.add(trash);
    } else if (r == 9) {
      trash.addImage(foodCanImg);
      trash.scale = 0.05;
      grayGroup.add(trash);
    } else if (r == 10) {
      trash.addImage(sodaCanImg);
      trash.scale = 0.05;
      grayGroup.add(trash);
    } else if (r == 11) {
      trash.addImage(glassBottleImg);
      blueGroup.add(trash);
    } else if (r == 12) {
      trash.addImage(glassShardImg);
      trash.scale = 0.4;
      blueGroup.add(trash);
    } else if (r == 13) {
      trash.addImage(soloImg);
      trash.scale = 0.1;
      redGroup.add(trash);
    }
    
    trash.y=Math.round(random(730, 750));
   
    
    trash.setLifetime=500;
    
    trashGroup.add(trash);
  }
}




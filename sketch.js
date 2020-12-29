var bg1, bg2, bg3, bg4, bg5, bgmain, mbg2;

var r1, r2, r3, r4, r5;

var name;

var smoke, flame;

var obstacle,obstacle1, obstacle2, obstacle3;

var obstaclesGroup;

var trajectory = [];

var gameState = 0;

function preload() {
  bg1 = loadImage("images/bg1.jpg");
  bg2 = loadImage("images/bg6.jpg");
  bg3 = loadImage("images/bg3.jpg");
  bg4 = loadImage("images/bg4.jpg");
  bg5 = loadImage("images/bg5.jpg");
  
  r1 = loadImage("images/r1.png");
  r2 = loadImage("images/r2.png");
  //r3 = createImg("r3.gif");
  r3 = loadGif("images/r3.gif");
  r4 = loadImage("images/r4.png");
  r5 = loadImage("images/r5.png");
  bgmain = loadImage("images/bgmain.jpg");
  smoke = loadImage("images/smoke.png");
  flame = loadImage("images/flame.png");
  obstacle1 = loadImage("images/asteroid.png");
  obstacle2 = loadImage("images/meteor.png");
  obstacle3 = loadImage("images/obstacle.png");
}


function setup() {
  createCanvas(1200,800);
 // button = createButton('START');
 // button.position(700,600);
 r1s = createSprite(200,450);
  r2s = createSprite(400,450);
  //r3s = createSprite(600,450);
  r4s = createSprite(800,450);
  r5s = createSprite(1000,450);
  mbg2 = createSprite(600,400);

  r1s.addImage(r1);
  r2s.addImage(r2);
  //r3s.addGif(r3);
  r4s.addImage(r4);
  r5s.addImage(r5);
  mbg2.addImage(bg2);
  mbg2.velocityY = 2;
  mbg2.visible = false;

  obstaclesGroup = createGroup();

  
}


function draw() {
  if (gameState===0){
  
  background(bgmain); 
  //r3.position(200,180);
  // image(r3, 120, 140);
  textSize(16);
  text("Space Rocketzz!", 570,200);
  // add story here

  

  

  
  if (mousePressedOver(r1s)) {
    gameState = 1;
   // name = "r1s";
    r1s.scale = 0.38;
    r1s.x = 440;
    r1s.y = 235;
    r1s.visible = true;
    r2s.visible = false;
   // r3s.visible = false;
    r4s.visible = false;
    r5s.visible = false;
  }
  if (mousePressedOver(r2s)) {
    gameState = 1;
    name = "r2s";
    r2s.scale = 0.37;
    r2s.x = 440;
    r2s.y = 235;
    r2s.visible = true;
    r1s.visible = false;
   // r3s.visible = false;
    r4s.visible = false;
    r5s.visible = false;
  }
 /* if (mousePressedOver(r3s)) {
    gameState = 1;
    r3s.scale = 0.35;
    r3s.x = 450;
    r3s.y = 150;
    r3s.visible = true;
    r2s.visible = false;
    r1s.visible = false;
    r4s.visible = false;
    r5s.visible = false;
  }*/
  if (mousePressedOver(r4s)) {
    gameState = 1;
    r4s.scale = 0.45;
    r4s.x = 440;
    r4s.y = 235;
    r4s.visible = true;
    r2s.visible = false;
   // r3s.visible = false;
    r1s.visible = false;
    r5s.visible = false;   
  }
  if (mousePressedOver(r5s)) {
    gameState = 1;
    r5s.scale = 0.35;
    r5s.x = 440;
    r5s.y = 235;
    r5s.visible = true;
    r2s.visible = false;
    //r3s.visible = false;
    r4s.visible = false;
    r1s.visible = false;
  }
  //button.mousePressed(()=>{
  // gameState = 1;
   
 // });
}
 if (gameState===1){
  //button.hide();
  background(bg1);
  textSize(26);
  stroke("Black");
  text("Press the Arrow Keys To Lift the Rocket",width-500,100);
  if (keyDown(UP_ARROW)&& name === "r2s"){
    r2s.velocityY = r2s.velocityY-0.5;
    r2s.velocityX = 0.235
   console.log(r2s.velocityY);
    //console.log(r2s.y);
   // camera.y = r2s.y;
   var position = [r2s.x-5, r2s.y+75];
  trajectory.push(position);
  for(var i=0; i<trajectory.length; i++){
    image(smoke,trajectory[i][0],trajectory[i][1]);
  }
   if (r2s.velocityY < -3.5){
    gameState=2;
   }

  }

}

  
  if(gameState===2){

  
  
mbg2.visible = true;
  //{
    //background(mbg2);
    r2s.depth = mbg2.depth+1;
    camera.position.y = r2s.y;
    camera.position.x = displayWidth/2
   // if (background(mbg2)){
      spawnObstacles();
   // }
    //mbg2.velocityY = 2;
  if(mbg2.y > 500) {
    mbg2.y = 400;

  } 
   
 // }
  
  

} 
  
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 160 === 0) {
    var obstacle = createSprite(random(200,800),20,10,40);
    obstacle.velocityY = random(2,6);
    obstacle.velocityX = random(-2,2);
    
    //generate random obstacles
    var rand = Math.round(random(1,3));
    console.log(rand);
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
      obstacle.scale = 0.3;
              break;
      case 2: obstacle.addImage(obstacle2);
      obstacle.scale = 0.2;
              break;
      case 3: obstacle.addImage(obstacle3);
      obstacle.scale = 0.25;
              break;
      /*case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;*/
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    //obstacle.scale = 0.5;
    //obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

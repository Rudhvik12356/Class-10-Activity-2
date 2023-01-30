var trex, trex_running, edges;
var groundImage;
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);

  
  // creating trex
  trex = createSprite(50,170,20,50);
  trex.addAnimation("running", trex_running);

  
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  ground=createSprite(300,180,600,10);
  ground.addImage(groundImage);
  ground.setVelocity(-5,0);
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  //stop trex from falling down
  trex.collide(ground);
  drawSprites();
}
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImage;



var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
 cloudImage= loadImage("cloud.png") ;
 
  
}

function setup() {

  createCanvas(600,200)
  
  //crear sprite de Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crear sprite de suelo
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crear sprite de suelo invisible
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generar numeros aleatorios
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //establecer color de fondo
  background(180);
  
  console.log(trex.y)
  
  
  
  //hacer que el Trex salte al presionar la barra espaciadora
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //evitar que el Trex caiga
  trex.collide(invisibleGround);
  
  //aparecer nubes
  spawnClouds()
  
  drawSprites();
}

//función para aparecer las nubes
function spawnClouds(){
 //escribir aquí tu código 
 if (frameCount % 60 === 0) {
  cloud=createSprite(600,100,40,10);
  cloud.addImage(cloudImage);
  cloud.y = Math.round(random(10,60))
  cloud.scale = 0.4
  cloud.velocityX=-3;
 }
 
}




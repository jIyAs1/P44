var bg, bgImg;

var mango, mangoImg;

var ground;

var log,logimg;
var bug, bugimg;
var treat, treatimg;



function preload(){
  bgImg = loadImage("BgImg.webp");
  mangoImg = loadAnimation("dog1.png","dog2.png","dog3.png","dog4.png","dog5.png");

  logimg = loadImage("Log2.png");
  bugimg = loadImage("bug2.png");


}

function setup(){
  createCanvas(900,550);
  bg = createSprite(0,0,1200,800);
  bg.addImage(bgImg);

  bg.velocityX=-1;

  ground = createSprite(50,550,200,5);
  ground.visible=false;
  

  mango = createSprite(100,450,100,100);
  mango.addAnimation(" mango_running",mangoImg);
  mango.scale=(0.5);


}

function draw(){
spawnLogs();
spawnBugs();

if(bg.x<-55){
bg.x=width/2;
}

if(keyDown("SPACE")&& mango.y>200){
  mango.velocityY=-5;

}

mango.velocityY=mango.velocityY+0.8;
mango.collide(ground);

drawSprites();
}

function spawnLogs(){
  if(frameCount%300===0){
    log=createSprite(800,450,100,100);
    log.addImage(logimg);
    log.velocityX=-3;
    log.scale = 0.07;
    log.y=random(400,500);
  }

}

function spawnBugs(){
  if(frameCount%300===0){
    bug=createSprite(800,150,100,100);
    bug.addImage(bugimg);
    bug.velocityX=-5;
    bug.scale = 0.07;
    bug.y=random(100,300);
  }

}
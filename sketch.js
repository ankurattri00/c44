var backgroundImg,gun,gunImg;
var scope,scopeImg;
var target,targetImg;

function preload(){
backgroundImg = loadImage("sprites/bg.jpeg");
gunImg = loadImage("sprites/gun.png");
scopeImg = loadImage("sprites/scope.png");
targetImg = loadImage("sprites/target.png");
}

function setup() {
  createCanvas(1200,500);

  target = createSprite(550,200,10,10);
target.addImage(targetImg);
target.scale= 0.6;

  gun = createSprite(550,400,10,10);
  gun.addImage(gunImg);
  gun.scale = 0.7;
  
  scope = createSprite(gun.x,gun.y,10,10);
scope.addImage(scopeImg);
scope.scale = 1.0;
scope.visible = false;


}

function draw() {
  background(backgroundImg);  
  
  if (keyDown("space")) {
    scope.visible = true;
    gun.visible = false;
  }

  if (keyWentUp("space")) {
    scope.visible = false ;
    gun.visible = true ;
  }
   
  
  
  scope.x = mouseX;
scope.y = mouseY;
  drawSprites();
}
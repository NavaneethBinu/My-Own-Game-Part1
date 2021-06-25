var player;
var ground;

function setup()
{
  createCanvas(400,400);
  player = createSprite(50,350,50,70);
  ground = createSprite(0,390,1000,20);
}

function draw()
{
 background(0);
if(keyDown("space")){
  player.velocityY = -12;
}
player.velocityY = player.velocityY+0.8;
player.collide(ground);
if(keyDown("RIGHT_ARROW")){
player.x = player.x+2;
}
if(keyDown("LEFT_ARROW")){
  player.x = player.x-2;
}
drawSprites();

}


























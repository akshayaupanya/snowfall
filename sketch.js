const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var boy;
var snows=[];
function preload(){
  back = loadImage("snow1.jpg")
  boyImg = loadAnimation("1.png","2.png","3.png","4.png")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
boy = createSprite(200,200,10,10);
boy.addAnimation('jumping',boyImg);
boy.scale = 0.3;



}

function draw() {
  background(back);  
  drawSprites();
  if(frameCount % 400 === 0){
    for( var i=0; i<100;i++){
      sn = new Snow(random(10,700),random(0,10),3)
      snows.push(sn);
    }
  }
 for( var i in snows){
   snows[i].display();
   snows[i].update();
 }
  Engine.update(engine);
}
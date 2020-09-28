const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var platform;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  block1 = new Box(330, 235, 30, 40);
  block2 = new Box(360, 235, 30, 40);
  block3 = new Box(390, 235, 30, 40);
  block4 = new Box(420, 235, 30, 40);
  block5 = new Box(450, 235, 30, 40);
  block6 = new Box(360, 195, 30, 40);
  block7 = new Box(390, 195, 30, 40);
  block8 = new Box(420, 195, 30, 40);
  block9 = new Box(390, 155, 30, 40);

  ground = new Ground(720,360,25,700);
  platform = new Ground(350,225,18,80);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);


  slingshot = new Slingshot(this.polygon,{x:100,y:200});
}

function draw() {
  background(255,255,255);  
  drawSprites();

  imageMode(CENTER);
  image(polygon_img,polygon.polygon.position.x,polygon.position.y,40,40);

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();

platform.display();
slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}



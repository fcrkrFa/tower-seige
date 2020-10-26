const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var groundd;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var hexa

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  groundd = new Ground(400,300,400,20);

  box1 = new Box(425,275,50,50);
  box2 = new Box(450,275,50,50);
  box3 = new Box(375,275,50,50);
  box4 = new Box(350,275,50,50);

  box5 = new Box(400,225,50,50);
  box6 = new Box(450,225,50,50);
  box7 = new Box(350,225,50,50);

  box8 = new Box(425,175,50,50);
  box9 = new Box(375,175,50,50);

  box10 = new Box(400,125,50,50);

  fill(255)
  hexa = Bodies.polygon(100,200,6,50);
  World.addBody(world, hexa);


}

function draw() {
  background(0);  
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();

  box10.display();

  groundd.display();


  drawSprites();
}
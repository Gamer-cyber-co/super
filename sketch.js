
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,object1,object2;

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  object1=Bodies.rectangle(200,100,20,20);
  object2=Bodies.rectangle(300,200,20,20);
  World.add(world,object1);
  World.add(world,object2);
  console.log(object1);
}
function draw()
{
  background(0);
  Engine.update(engine);
  
  rectMode(CENTER);
    rect(object1.position.x,object1.position.y,50,50);
  rect(object2.position.x,object2.position.y,50,50)
}

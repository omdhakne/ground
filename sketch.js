const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ground,ball

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
  var options={
    isStatic:true
  }
ground= Bodies.rectangle(200,390,200,20,options)
World.add(world,ground)
ball=Bodies.circle(200,100,20)
World.add(world,ball)
}
function draw() {
  background(255,255,255);
Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y , 400,20)

ellipseMode(RADIUS)

}
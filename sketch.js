const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ball;
var button;
var button_2;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
    engine = Engine.create();
  world = engine.world;
  var ball_options = {
    restitution: 0.95
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  ellipseMode(RADIUS);

  button=createImg("right.png");
  button.position(220,30);
  button.size(50,50);
  button_2=createImg("up.png");
  button_2.position(20,30);
  button_2.size(50,50);
  
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  if (keyDown(RIGHT_ARROW)) {
    rightForce();
  }
  if (keyDown(UP_ARROW)) {
  upForce();
}
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}
function rightForce() 
{
 Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.5, y: 0}); 
}
function upForce()
{
 Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0, y: -0.5});
}
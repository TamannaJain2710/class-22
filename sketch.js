const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies



var ourWorld, ourEngine, ground , ball
function setup() {
  createCanvas(400,400);

  ourEngine = Engine.create();
  ourWorld = ourEngine.world;

  var ground_options = {

    isStatic: true  

  }

  var ball_options = {
    restitution: 1
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  console.log(ground)

  World.add(ourWorld,ground)
  //createSprite(400, 200, 50, 50);

  ball = Bodies.circle(200,200,20,ball_options)
  World.add(ourWorld,ball);

}

function draw() {
  background(0);  

  Engine.update(ourEngine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y ,400,20)
  //drawSprites();
}
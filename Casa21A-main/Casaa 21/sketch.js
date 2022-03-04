const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground,leftSide,rightSide;
var ball;
var button;

var groundObj;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	button = createImg("rightUp.png");
	button.position(110,30);
	button.size(50,50);
	button.mouseClicked(gravityForce);

	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(786.7,630,25,80);
	rightSide = new Ground(500,630,25,80);

	//Create the Bodies Here.
    var ball_options = {
      isStatic:false,
	  restitution:0.3,
	  friction:0,
	  density:1.2
	}
	
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {	
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  leftSide.show();
  rightSide.show();
  ground.show();

  Engine.update(engine);
}
// por algum motivo o gravityForce não esta funcionando no codigo
function gravityForce(){
  Matter.Body.applyForce(ball,ball.position,{x:40,y:-40});
}